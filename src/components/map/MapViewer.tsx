import { useMap } from "@/contexts/MapContext";
import Map from "ol/Map";
import View from "ol/View";
import { useEffect, useRef } from "react";
import {defaults as defaultControls} from "ol/control";
import 'ol/ol.css';
import '@/assets/css/ol/control.scss';
import { cartoBasemaps, currentAirPlaneLayer, standardLayer } from "@/sevices/maps/map";
import AircraftUpdater from "./AirplaneUpdater";

const MapViewer = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const {setMap} = useMap();

    const source = currentAirPlaneLayer.getSource();

    useEffect(()=>{
        if(!mapRef.current) return;
        const map = new Map({
            target: mapRef.current,
            layers: [
                standardLayer,
                cartoBasemaps,
                currentAirPlaneLayer
            ],
            view: new View({
                center: [0,0],
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
        // map.addControl(
        //     new ScaleLine({
        //         units: 'nautical',
        //         bar: true,
        //         className: 'absolute bottom-4 right-20 flex items-center',
        //         text: true,
        //     })
        // )
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