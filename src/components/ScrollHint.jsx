import Lottie from "lottie-react";
import scrollGesture from "../assets/handgesture.json"; // 다운로드한 JSON 파일
import styled from "styled-components";

const ScrollHint = () => (
  <ScrollHintWrapper>
    <Lottie
      animationData={scrollGesture}
      loop={true}
      style={{ width: 60, height: 60 }}
    />
  </ScrollHintWrapper>
);

export default ScrollHint;

const ScrollHintWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
`;
