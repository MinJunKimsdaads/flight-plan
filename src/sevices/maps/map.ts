import TileLayer from "ol/layer/Tile"
import WebGLVectorLayer from 'ol/layer/WebGLVector.js';
import { OSM, XYZ } from "ol/source"
import VectorSource from "ol/source/Vector";


//기본 맵
export const standardLayer = new TileLayer({
    source: new OSM(),
})

//실시간 항공기 맵
export const currentAircraftLayer = new WebGLVectorLayer({
    source: new VectorSource(),
    style: {
        'circle-radius': 5,
        'circle-fill-color': [
            'case',
            ['==',['get', 'hover'], true],
            'yellow',
            'red'
        ],
    },
});

//Carto Basemaps
export const cartoBasemaps = new TileLayer({
    source: new XYZ({
    url: 'https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attributions: '© OpenStreetMap contributors, © CARTO',
  }),
})