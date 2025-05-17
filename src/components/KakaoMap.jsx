import React, { useEffect } from "react";
import styled from "styled-components";
import { mapMarker } from "../assets/images";

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=7d964660540e165968142c27b5fa737c&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.42048944, 127.10732716),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 커스텀 오버레이 내용
        const content = `
          <div style="position: relative;">
            <div style="
              background: white;
              padding: 10px;
              border-radius: 10px;
              box-shadow: 0 2px 6px rgba(0,0,0,0.2);
              display: flex;
              flex-direction: column;
              align-items: center;
            ">
              <img src="${mapMarker}" alt="marker" style="width: 60px; height: 60px;" />
            </div>
            <div style="
              position: absolute;
              bottom: -10px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-top: 10px solid white;
            "></div>
          </div>
        `;
        const overlay = new window.kakao.maps.CustomOverlay({
          position: new window.kakao.maps.LatLng(37.41975659, 127.10783117),
          content: content,
          xAnchor: 0.5, // 수평 중앙
          yAnchor: 1, // 수직 하단 (말풍선 아래쪽이 기준)
        });

        overlay.setMap(map);
      });
    };
  }, []);

  return <MapBox id="map" />;
};

export default KakaoMap;

const MapBox = styled.div`
  width: 100%;
  height: 60vw;
  max-height: 288px;
  margin: 20px auto;
  background-color: #f2f2f2;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
