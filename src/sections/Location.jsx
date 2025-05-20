import React from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import { kakaoMap, naverMap, tMap } from "../assets/images";
import KakaoMap from "../components/KakaoMap";

const Location = () => {
  const handleCopy = () => {
    const address = "경기 성남시 수정구 설개로 39";
    window.navigator.clipboard.writeText(address).then(() => {
      alert("주소가 복사되었습니다.");
    });
  };
  return (
    <LocationWrapper>
      <TitleWrapper>
        <SubTitle>location</SubTitle>
        <Title>오시는 길</Title>
      </TitleWrapper>

      <MapWrapper>
        <AddressText>
          <p>메종디탈리 | 경기 성남시 수정구 설개로 39</p>
          <CopyButton onClick={handleCopy}>복사하기</CopyButton>
        </AddressText>
        <KakaoMap />

        <NaviLinks>
          <a href="https://naver.me/GEXhvXKp" target="_blank" rel="noreferrer">
            <img src={naverMap} alt="네이버지도" />
            <span>네이버지도</span>
          </a>
          <a
            href="https://kko.kakao.com/mCgaCcxgFy"
            target="_blank"
            rel="noreferrer"
          >
            <img src={kakaoMap} alt="카카오맵" />
            <span>카카오맵</span>
          </a>
          <a href="https://tmap.life/06929250" target="_blank" rel="noreferrer">
            <img src={tMap} alt="티맵" />
            <span>티맵</span>
          </a>
        </NaviLinks>
      </MapWrapper>
      <InfoList>
        <li>
          <strong>셔틀</strong>
          <p>
            <span className="orangeColor">3호선</span>
            <span className="yellowColor">수인분당</span>
            수서역 6번 출구 앞 셔틀운영
          </p>
          <p className="smaller">• 예식 시간 2시간전 부터 운행됩니다</p>
        </li>
        <li>
          <strong>버스</strong>
          <p>
            <span className="redColor">광역,직행</span>
            [9800] [9400] [9408]
          </p>
          <p>시흥동 농협창고 정류장 하차, 도보 5분소요</p>
          <p className="smaller">
            • [9800] [9400] : 강남역, 양재역, 모란역 승하차 가능
          </p>
          <p className="smaller">
            • [9408] : 고속터미널, 반포역, 논현역, 강남역, 양재역 승하차 가능
          </p>
        </li>
        {/* <li>
          <strong>주차</strong>
          <p>
            • 연수3동 공영주차장 (셔틀운영)
            <br />
            &emsp;- 연수동 532-2
            <br />
            &emsp;- 이용 시 주차쿠폰 제공
            <br />
            • 원인재역 공영주차장
            <br />• 삼성디지털프라자 환승주차장
          </p>
        </li> */}
      </InfoList>
    </LocationWrapper>
  );
};

export default Location;
const LocationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  margin: 0 auto;
  padding: 120px 20px 40px;
  font-family: basicFont;
`;
const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;
const MapWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #ae360e;
  border-bottom: 1px solid #ae360e;
`;
const AddressText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CopyButton = styled.button`
  margin-left: 10px;
  padding: 4px 10px;
  font-size: 0.9rem;
  border: 1px solid #e8e4e2;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-family: basicFont;
`;

const NaviLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    border: 1px solid #e8e4e2;
    border-radius: 5px;
    font-size: 0.85rem;
    padding: 6px 0;

    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
`;

const InfoList = styled.ul`
  width: 100%;
  text-align: left;
  font-size: 0.95rem;
  padding: 30px 20px 0;
  list-style: none;
  li {
    margin-bottom: 40px;
    line-height: 1.6;
    p {
      display: flex;
      align-items: center;
      gap: 5px;
      line-height: 2;
      &.smaller {
        line-height: 1.2;
        padding: 5px 0 0 12px;
        font-size: 14px;
        text-indent: -12px;
      }
    }
    span {
      display: inline-block;
      padding: 1px 6px;
      font-family: roundedFont;
      font-size: 10px;
      font-weight: bold;
      color: #fff;
      border-radius: 20px;
    }
    .orangeColor {
      background-color: #ff7200;
    }
    .yellowColor {
      background-color: #ffce32;
    }
    .redColor {
      background-color: #ff451e;
    }
  }
  strong {
    display: block;
    margin-bottom: 4px;
    font-size: 18px;
    color: #ae360e;
  }
`;
