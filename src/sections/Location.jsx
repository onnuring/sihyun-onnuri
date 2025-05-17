import React from "react";
import styled from "styled-components";
import { paperBg } from "../styles/paperBg";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

const Location = () => {
  return (
    <Wrapper>
      <SubTitle>location</SubTitle>
      <Title>오시는 길</Title>
    </Wrapper>
  );
};

export default Location;
const Wrapper = styled.section`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
