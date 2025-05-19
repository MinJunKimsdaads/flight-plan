import { useEffect } from "react";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import { getAllAircraftList } from "@/api/query";

interface AircraftUpdaterProps {
  source: VectorSource<any>;
}

export default function AircraftUpdater({ source }: AircraftUpdaterProps) {
  useEffect(() => {
    // let intervalId: ReturnType<typeof setInterval>;
    const loadAircraftFeatures = async () => {
      try {
        const featuresData = await getAllAircraftList();
        const geojson = {
          type: "FeatureCollection",
          features: featuresData.data.states
            .filter((f: any) => f[5] != null && f[6] != null) // 유효한 경도/위도
            .map((f: any) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [f[5], f[6]], // 경도, 위도
              },
              properties: {
                icao24:f[0] ? f[0] : null,
                callsign:f[1] ? f[1] : null,
                origin_country:f[2] ? f[2] : null,
                time_position:f[3] ? f[3] : null,
                last_contact:f[4] ? f[4] : null,
                longitude:f[5] ? f[5] : null,
                latitude:f[6] ? f[6] : null,
                baro_altitude:f[7] ? f[7] : null,
                on_ground:f[8] ? f[8] : null,
                velocity:f[9] ? f[9] : null,
                true_track:f[10] ? f[10] : null,
                vertical_rate:f[11] ? f[11] : null,
                sensors:f[12] ? f[12] : null,
                geo_altitude:f[13] ? f[13] : null,
                squawk:f[14] ? f[14] : null,
                spi:f[15] ? f[15] : null,
                position_source:f[16] ? f[16] : null,
                category:f[17] ? f[17] : null,
              },
          })),
        };
        const format = new GeoJSON();
        const features = format.readFeatures(geojson, {
          featureProjection: "EPSG:3857", // OpenLayers 지도 좌표계로 변환
        });
        
        // 기존 소스 초기화 후 새 피처 추가
        source.clear();
        source.addFeatures(features);
      } catch (error) {
        console.error("항공기 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    // 최초 실행
    loadAircraftFeatures();

    //5초 주기 갱신
    // intervalId = setInterval(loadAircraftFeatures, 30000);

    // 컴포넌트 언마운트 시 정리
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [source]);

  return null; // 렌더링할 UI는 없음
}