import { useEffect } from "react";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import { getAllAirplaneList } from "@/api/query";

interface AircraftUpdaterProps {
  source: VectorSource<any>;
}

export default function AircraftUpdater({ source }: AircraftUpdaterProps) {
  useEffect(() => {
    // let intervalId: ReturnType<typeof setInterval>;

    const loadAircraftFeatures = async () => {
      try {
        const featuresData = await getAllAirplaneList();

        // console.log(featuresData.data);

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