import TileLayer from "ol/layer/Tile"
import WebGLVectorLayer from 'ol/layer/WebGLVector.js';
import { OSM, XYZ } from "ol/source"
import VectorSource from "ol/source/Vector";
import airportJson from '@/assets/data/airport.json';
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { FeatureLike } from "ol/Feature";
import aircraftImg from '@/assets/img/map/aircraft.png';
import airportImg from '@/assets/img/map/airport.png';

//standard map
export const basemaps = new OSM();

//Carto Basemaps
export const darkLabelCartoBasemaps = new XYZ({
  url: 'https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  attributions: '© OpenStreetMap contributors, © CARTO',
});

export const darkCartoBasemaps = new XYZ({
  url: 'https://{a-d}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
  attributions: '© OpenStreetMap contributors, © CARTO',
});

export const lightLabelCartoBasemaps = new XYZ({
  url: 'https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  attributions: '© OpenStreetMap contributors, © CARTO',
});

export const lightCartoBasemaps = new XYZ({
  url: 'https://{a-d}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
  attributions: '© OpenStreetMap contributors, © CARTO',
});

export const voyagerLabelCartoBasemaps = new XYZ({
  url: 'https://{a-d}.basemaps.cartocdn.com/rastertiles/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attributions: '© OpenStreetMap contributors, © CARTO',
});

export const voyagerCartoBasemaps = new XYZ({
  url: 'https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
  attributions: '© OpenStreetMap contributors, © CARTO',
});

//기본 맵
export const standardLayer = new TileLayer({
    source: basemaps,
})

//실시간 항공기 맵
export const currentAircraftLayer = new WebGLVectorLayer({
    source: new VectorSource(),
    style: {
        'icon-src': aircraftImg,
        'icon-width': 30,
        'icon-height': 30,
        'icon-color': [
          'case',
          ['==',['get', 'hover'], 1],
            'red', // hover on
            'yellow', // hover off
        ],
        'icon-scale': 1,
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
        'icon-src': airportImg,
        'icon-width': 30,
        'icon-height': 30,
        'icon-color': [
          'case',
          ['==',['get', 'hover'], 1],
            'red', // hover on
            '#0d99ff', // hover off
        ],
        'icon-scale': 1,
    },
});