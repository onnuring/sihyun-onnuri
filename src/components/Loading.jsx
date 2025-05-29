import React from "react";
import styled, { keyframes } from "styled-components";
import { heart } from "../assets/images";

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingText>loading...</LoadingText>
      <HeartImage src={heart} alt="Loading Heart" />
    </LoadingWrapper>
  );
};

export default Loading;

export const heartbeat = keyframes`
  0% { transform: scale(1); }
  20% { transform: scale(1.15); }
  40% { transform: scale(0.9); }
  60% { transform: scale(1.1); }
  80% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoadingText = styled.p`
  font-family: "Cormorant SC", serif;
  font-size: 20px;
  color: #ae360e;
`;
const HeartImage = styled.img`
  display: block;
  width: 100px;
  animation: ${heartbeat} 1.4s infinite ease-in-out;
`;
