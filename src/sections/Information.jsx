import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

const TAB_MENUS = [
  { label: "예식장 안내", key: "예식장안내" },
  { label: "식사 안내", key: "식사안내" },
  { label: "주차 안내", key: "주차안내" },
];

const TAB_CONTENTS = {
  예식장안내: [
    {
      emoji: "💍",
      text: "예식은 1부와 2부 나눠서 진행됩니다. 대관시간은 오후 3시까지로 오셔서 여유롭게 시간 보내셨으면 좋겠습니다.",
    },
    {
      emoji: "👰🏻‍♀️",
      text: "신부대기실은 예식 10분 전 마감됩니다. 메인홀과 다른 건물이므로 참고 부탁드립니다.",
    },
    {
      emoji: "🍹",
      text: "일찍 도착하신 분들께 웰컴 바에서 웰컴 드링크가 제공됩니다.",
    },
    {
      emoji: "🌸",
      text: "화환은 정중히 사양합니다. 감사한 마음만 받겠습니다.",
    },
    {
      emoji: "🏧",
      text: "ATM기는 메인홀 건물 1층(주차장) 엘리베이터 맞은편에 비치되어 있습니다.",
    },
    {
      emoji: "💐",
      text: "예식이 끝난 후 사용된 꽃 중 일부를 포장하여 꽃다발로 나눠드립니다. 소량으로 선착순 제공되니 양해 부탁드립니다.",
    },
  ],
  식사안내: [
    { emoji: "🍽", text: "식사는 1부가 끝나고 양식 코스 요리로 제공됩니다." },
    {
      emoji: "♾️",
      text: "코스요리 외에 핀치 푸드가 서빙될 예정입니다. 마음껏 리필하여 즐겨주세요.",
    },
    {
      emoji: "👼🏻",
      text: "아기 의자가 테라스 좌석에서 제공됩니다. 아기와 함께 축하해주세요.",
    },
  ],
  주차안내: [
    {
      emoji: "🚗",
      text: "예식장 내외에 주차공간이 있습니다. 당일 현장 스태프들이 안내할 예정이오니 안내를 따라주세요.",
    },
    { emoji: "⏳", text: "주차시간에 제한이 없으니 마음 편히 참석해 주세요." },
  ],
};
const Information = () => {
  const [activeTab, setActiveTab] = useState("예식장안내");
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef({});
  useLayoutEffect(() => {
    const tabKey = activeTab;
    const tabElement = tabRefs.current[tabKey];
    if (tabElement) {
      const rect = tabElement.getBoundingClientRect();
      const containerRect = tabElement.parentNode.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  }, [activeTab]);
  return (
    <InformationWrapper>
      <SubTitle>information</SubTitle>
      <Title>안내 말씀 드립니다</Title>
      <TabContainer>
        <TabMenu>
          {TAB_MENUS.map(({ label, key }) => (
            <TabButton
              key={key}
              ref={(el) => (tabRefs.current[key] = el)}
              onClick={() => setActiveTab(key)}
              className={activeTab === key ? "active" : ""}
            >
              {label}
            </TabButton>
          ))}
          <TabUnderline style={underlineStyle} />
        </TabMenu>
        <TabContent key={activeTab}>
          {TAB_CONTENTS[activeTab].map((item, i) => (
            <Paragraph key={i}>
              <Emoji>{item.emoji}</Emoji>
              {item.text}
            </Paragraph>
          ))}
        </TabContent>
      </TabContainer>
    </InformationWrapper>
  );
};

export default Information;

const InformationWrapper = styled.section`
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  padding: 200px 20px 40px;
`;
const TabContainer = styled.div`
  margin-top: 40px;
  z-index: 99;
`;

const TabMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e4e2;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  padding: 10px 6px;
  cursor: pointer;
  font-family: basicFont;
  position: relative;
  color: #333;
  transition: color 0.3s;

  &.active {
    color: #ae360e;
  }
`;

const TabUnderline = styled.div`
  position: absolute;
  bottom: -1px;
  height: 1px;
  background-color: #ae360e;
  transition: all 0.3s ease;
  left: ${({ style }) => style?.left || 0}px;
  width: ${({ style }) => style?.width || 0}px;
`;

const TabContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  font-family: basicFont;
  color: #333;
  padding: 0 10px;
  opacity: 0;
  animation: fadeIn 0.5s forwards ease-in;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
const Paragraph = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  font-family: basicFont;
  word-break: keep-all;
`;

const Emoji = styled.span`
  min-width: 1.4em;
  display: inline-block;
`;
