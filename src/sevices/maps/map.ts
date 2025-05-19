import TileLayer from "ol/layer/Tile"
import WebGLVectorLayer from 'ol/layer/WebGLVector.js';
import { OSM, XYZ } from "ol/source"
import VectorSource from "ol/source/Vector";
import airportJson from '@/assets/data/airport.json';
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { FeatureLike } from "ol/Feature";
import aircraftImg from '@/assets/img/map/aircraft.svg';
// import aircraftActiveImg from '@/assets/img/map/aircraft_active.svg';


//기본 맵
export const standardLayer = new TileLayer({
    source: new OSM(),
})

//Carto Basemaps
export const cartoBasemaps = new TileLayer({
    source: new XYZ({
    url: 'https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attributions: '© OpenStreetMap contributors, © CARTO',
  }),
})


//실시간 항공기 맵
export const currentAircraftLayer = new WebGLVectorLayer({
    source: new VectorSource(),
    style: {
        'circle-radius': 5,
        'circle-fill-color': [
            'case',
            ['==',['get', 'hover'], 1],
            'yellow',
            'red'
        ],
        'icon-src':aircraftImg,
        'icon-width': 24,
        'icon-height': 24,
        'icon-color': 'white',
        'icon-rotate-with-view': true,
    },
});

//공항 맵
export const airportLayer = new WebGLVectorLayer({
  source: new VectorSource({
    features: airportJson
    .map((item) => {
        const lat = parseFloat(String(item[6]));
        const lon = parseFloat(String(item[7]));
        if (isNaN(lat) || isNaN(lon)) return null;
        return new Feature({
        geometry: new Point(fromLonLat([lon, lat])),
        id: item[0],
        name: item[1],
        city: item[2],
        country: item[3],
        iata: item[4],
        icao: item[5],
        });
    })
    .filter(Boolean) as FeatureLike[], // <-- 타입 단언 추가
    }),
  style: {
    'circle-radius': 6,
    'circle-fill-color': 'rgba(0, 123, 255, 0.8)',
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1.5,
  },
});