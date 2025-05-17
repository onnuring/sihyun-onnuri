import React from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import { kakaoMap, naverMap, tMap } from "../assets/images";
import KakaoMap from "../components/KakaoMap";

const Location = () => {
  const handleCopy = () => {
    const address = "경기 성남시 수정구 설개로 39";
    navigator.clipboard.writeText(address).then(() => {
      alert("주소가 복사되었습니다.");
    });
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <SubTitle>location</SubTitle>
        <Title>오시는 길</Title>
      </TitleWrapper>

      <MapWrapper>
        <AddressText>
          <p>경기 성남시 수정구 설개로 39</p>
          <CopyButton onClick={handleCopy}>복사하기</CopyButton>
        </AddressText>
        <KakaoMap />

        <NaviLinks>
          <a href="https://naver.me/GedKGFBh" target="_blank" rel="noreferrer">
            <img src={naverMap} alt="네이버지도" />
            <span>네이버지도</span>
          </a>
          <a href="https://kko.to/hNOjymxlNa" target="_blank" rel="noreferrer">
            <img src={kakaoMap} alt="카카오맵" />
            <span>카카오맵</span>
          </a>
          <a href="https://tmap.life/1009d349" target="_blank" rel="noreferrer">
            <img src={tMap} alt="티맵" />
            <span>티맵</span>
          </a>
        </NaviLinks>
      </MapWrapper>
      <InfoList>
        <li>
          <strong>셔틀</strong>
          <p>
            3호선, 수인분당선 <br />
            수서역 6번 출구 앞 셔틀운영
          </p>
        </li>
        <li>
          <strong>버스</strong>
          <p>원인재역(1번출구) : 일반[304, 522], 급행[99]</p>
        </li>
        <li>
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
        </li>
      </InfoList>
    </Wrapper>
  );
};

export default Location;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  margin: 0 auto;
  padding: 120px 20px 0;
`;
const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;
const MapWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid #ae360e;
  border-bottom: 1px solid #ae360e;
`;
const AddressText = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CopyButton = styled.button`
  margin-left: 10px;
  padding: 4px 10px;
  font-size: 0.9rem;
  border: 1px solid #ae360e;
  background-color: #fff;
  color: #ae360e;
  border-radius: 4px;
  cursor: pointer;
`;

const NaviLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  outline: 1px solid lime;

  a {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: #444;
    border: 1px solid #ae360e;
    border-radius: 5px;
    font-size: 0.85rem;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const InfoList = styled.ul`
  text-align: left;
  font-size: 0.95rem;
  margin-top: 30px;
  li {
    margin-bottom: 16px;
    line-height: 1.6;
  }
  strong {
    font-weight: 600;
    display: block;
    margin-bottom: 4px;
    color: #8d508d;
  }
`;
