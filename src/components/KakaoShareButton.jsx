import React from "react";
import styled from "styled-components";
import { snap1 } from "../assets/images";

const KakaoShareButton = ({ title = "우리 결혼해요 💍", imageUrl, url }) => {
  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.Share) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title,
          description: "초대장을 확인해보세요!",
          imageUrl: imageUrl || snap1,
          link: {
            mobileWebUrl: url || window.location.href,
            webUrl: url || window.location.href,
          },
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: url || window.location.href,
              webUrl: url || window.location.href,
            },
          },
        ],
      });
    } else {
      alert("카카오톡 공유 기능을 사용할 수 없습니다.");
    }
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
