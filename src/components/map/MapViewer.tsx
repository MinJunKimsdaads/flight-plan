import { useMap } from "@/contexts/MapContext";
import Map from "ol/Map";
import View from "ol/View";
import { useEffect, useRef } from "react";
import {defaults as defaultControls} from "ol/control";
import 'ol/ol.css';
import '@/assets/css/ol/control.scss';
import { airportLayer, currentAircraftLayer, standardLayer } from "@/sevices/maps/layer";
import AircraftUpdater from "./AirplaneUpdater";
import { fromLonLat } from "ol/proj";
import { useAirplaneHoverStore } from "@/store/aircraftStore";
import { Feature } from "ol";

const MapViewer = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const {setMap} = useMap();

    const source = currentAircraftLayer.getSource();

    useEffect(()=>{
        if(!mapRef.current) return;
        const map = new Map({
            target: mapRef.current,
            layers: [
                standardLayer,
                airportLayer,
                currentAircraftLayer
            ],
            view: new View({
                center: fromLonLat([127.1388684,37.4449168]),
                zoom: 7,
                minZoom: 0,
                maxZoom: 17,
            }),
            controls: defaultControls({
                attribution: false,
                zoom: false,
                rotate: false,
            }),
        });
        map.on('pointermove',(event)=>{
            const pixel = event.pixel;
            const hit = map.hasFeatureAtPixel(pixel);
            map.getTargetElement().style.cursor = hit ? 'pointer' : '';

            const features = map.getFeaturesAtPixel(pixel);
            const hovered = features?.[0] || null;

            const {hoveredAircraft,setHoveredAircraft} = useAirplaneHoverStore.getState();
            if (hovered !== hoveredAircraft) {
                if (hoveredAircraft) {
                    (hoveredAircraft as Feature)?.set('hover', false);
                }
                if (hovered) {
                    (hovered as Feature)?.set('hover', true);
                }
                setHoveredAircraft(hovered);
                const source = currentAircraftLayer.getSource();
                if(source){
                    source.changed();
                }
            }
            
        });
        setMap(map);
        return ()=>map.setTarget(undefined);
    },[setMap]);

    return (
        <div ref={mapRef} style={{width:'100%', height:"100vh"}}>
            {source && <AircraftUpdater source={source}></AircraftUpdater>}
        </div>
    )
};

export default MapViewer;