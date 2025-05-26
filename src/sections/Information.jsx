import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import { TAB_INFO_CONTENTS, TAB_INFO_MENUS } from "../constants/customInfo";

const Information = () => {
  const [activeTab, setActiveTab] = useState("예식장안내");
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 20,
    width: 98,
  });
  const [heights, setHeights] = useState({});
  const tabRefs = useRef({});
  const contentRefs = useRef({});

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      const tabElement = tabRefs.current[activeTab];
      console.log("///////////////", tabElement.getBoundingClientRect());
      if (tabElement && tabElement.parentNode) {
        const rect = tabElement.getBoundingClientRect();
        const parentRect = tabElement.parentNode.getBoundingClientRect();
        setUnderlineStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }

      const newHeights = {};
      Object.keys(TAB_INFO_CONTENTS).forEach((key) => {
        const el = contentRefs.current[key];
        if (el) {
          newHeights[key] = el.scrollHeight;
        }
      });
      setHeights(newHeights);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);
  return (
    <InformationWrapper>
      <SubTitle>information</SubTitle>
      <Title>안내 사항</Title>
      <TabContainer>
        <TabMenu>
          {TAB_INFO_MENUS.map(({ label, key }) => (
            <TabButton
              key={key}
              ref={(el) => (tabRefs.current[key] = el)}
              onClick={() => setActiveTab(key)}
              className={activeTab === key ? "active" : ""}
            >
              {label}
            </TabButton>
          ))}
          <TabUnderline
            $left={underlineStyle.left ?? 20}
            $width={underlineStyle.width ?? 98}
          />
        </TabMenu>
        {TAB_INFO_MENUS.map(({ key }) => (
          <TabContent
            key={key}
            ref={(el) => (contentRefs.current[key] = el)}
            $isActive={activeTab === key}
            $maxHeight={heights[key] || 300}
          >
            {TAB_INFO_CONTENTS[key].map((item, i) => (
              <Paragraph key={i}>
                <Emoji>{item.emoji}</Emoji>
                {item.text}
              </Paragraph>
            ))}
          </TabContent>
        ))}
      </TabContainer>
    </InformationWrapper>
  );
};

export default Information;

const InformationWrapper = styled.section`
  width: 100vw;
  max-width: 480px;
  margin: 0 auto;
  padding: 40px 20px;
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
  border-bottom: 1px solid #f0eae7;
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
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
`;

const TabContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  font-family: basicFont;
  color: #333;
  padding: 0 10px;
  overflow: hidden;
  transition: max-height 0.5s ease;
  max-height: ${({ $isActive, $maxHeight }) =>
    $isActive ? `${$maxHeight}px` : "0px"};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition-property: max-height, opacity;
  transition-duration: 0.5s;
  /* animation: fadeIn 0.5s forwards ease-in; */

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
