import TileLayer from "ol/layer/Tile"
import WebGLVectorLayer from 'ol/layer/WebGLVector.js';
import { OSM } from "ol/source"


//기본 맵
export const standardLayer = new TileLayer({
    source: new OSM(),
})

//실시간 항공기 맵
// export const currentAirPlaneLayer = new WebGLVectorLayer({
    
// });