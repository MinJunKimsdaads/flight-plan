import { ALL_AIRCRAFT_ADDRESS } from "@/constants/apiConstants"
import axios from "axios"
import {AxiosResponse} from "axios"

export const getAllAircraftList = async(): Promise<AxiosResponse<any>> => {
    // const username = import.meta.env.VITE_OPENSKY_USERNAME;
    // const password = import.meta.env.VITE_OPENSKY_PASSWORD;
    // const basicAuth = btoa(`${username}:${password}`);
    try{
        const res = await axios.get(ALL_AIRCRAFT_ADDRESS)
        return res;
    } catch (error) {
        console.error("항공기 정보를 가져오는 데 실패했습니다:", error);
        throw error;
    }
}