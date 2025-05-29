import React from "react";
import styled from "styled-components";

const KakaoShareButton = () => {
  const handleKakaoShare = () => {
    window.Kakao.Link.sendCustom({
      templateId: Number(process.env.REACT_APP_KAKAO_TEMPLATE_ID),
    });
  };

  return <Button onClick={handleKakaoShare}>카카오톡 공유</Button>;
};

export default KakaoShareButton;

const Button = styled.button`
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  cursor: pointer;
  font-family: basicFont;
  transition: background 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
