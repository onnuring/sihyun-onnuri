import React from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import KakaoMap from "../components/KakaoMap";
import { NAVIGATION_LINKS, TRANSPORT_INFO } from "../constants/customInfo";
import CopyButton from "../components/CopyButton";

const Location = () => {
  return (
    <LocationWrapper>
      <TitleWrapper>
        <SubTitle>location</SubTitle>
        <Title>오시는 길</Title>
      </TitleWrapper>

      <MapWrapper>
        <AddressText>
          <span>메종디탈리 | 경기 성남시 수정구 설개로 39</span>
          <CopyButton
            copyText={"경기 성남시 수정구 설개로 39"}
            obj={"주소가"}
          />
        </AddressText>
        <KakaoMap />

        <NaviLinks>
          {NAVIGATION_LINKS.map(({ name, url, icon }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <img src={icon} alt={name} />
              <span>{name}</span>
            </a>
          ))}
        </NaviLinks>
      </MapWrapper>
      <InfoList>
        {TRANSPORT_INFO.map(({ type, contents }, idx) => (
          <li key={idx}>
            <TitleText>{type}</TitleText>
            <ContentTextBox>
              {contents.map((item, idx) => {
                if (item.tag || item.subscribe) {
                  return (
                    <React.Fragment key={idx}>
                      {item.tag && (
                        <span className={item.className}>{item.tag}</span>
                      )}
                      {item.subscribe && <span>{item.subscribe}</span>}
                    </React.Fragment>
                  );
                } else if (item.text) {
                  return (
                    <p key={idx} className={item.smaller ? "smaller" : ""}>
                      {item.text}
                    </p>
                  );
                } else {
                  return null;
                }
              })}
            </ContentTextBox>
          </li>
        ))}
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
  padding: 70px 20px;
  font-family: basicFont;
`;
const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;
const MapWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #f0eae7;
  border-bottom: 1px solid #f0eae7;
`;
const AddressText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    border: 1px solid #f0eae7;
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
      &.inlineP {
        display: inline-block;
      }
    }
    span {
      display: inline-block;
      line-height: 2;
      vertical-align: middle;
    }
    .tag {
      display: inline-block;
      padding: 1px 6px;
      font-family: roundedFont;
      font-size: 10px;
      font-weight: bold;
      color: #fff;
      border-radius: 20px;
      margin-right: 5px;
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
`;
const TitleText = styled.h3`
  margin-bottom: 4px;
  font-size: 18px;
  color: #ae360e;
`;
const ContentTextBox = styled.div``;
