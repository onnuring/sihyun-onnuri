import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { layer1, layer2, layer3, layer4 } from "../assets/images";
import KakaoShareButton from "../components/KakaoShareButton";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const handleCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다!");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        const footerHeight = footerRef.current?.clientHeight || 0;

        gsap.utils.toArray(".parallax-layer").forEach((layer) => {
          const depth = parseFloat(layer.dataset.depth) || 0;
          const yOffset = -(footerHeight * depth); // 안정적으로 계산

          gsap.to(layer, {
            y: yOffset,
            scale: layer.dataset.depth === "0.4" ? "0.5" : "1",
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top center",
              end: "center center",
              scrub: 0.5,
            },
          });
        });
      });
    }, 100); // 약간의 delay를 줘야 DOM이 렌더된 후 정확한 높이 측정 가능

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <FooterWrapper ref={footerRef}>
      <ParallaxLayer
        className="parallax-layer layer1"
        data-depth="0.1"
        style={{ backgroundImage: `url(${layer1})` }}
      />
      <ParallaxLayer
        className="parallax-layer layer2"
        data-depth="0.2"
        style={{ backgroundImage: `url(${layer2})` }}
      />
      <ParallaxLayer
        className="parallax-layer layer3"
        data-depth="0.4"
        style={{ backgroundImage: `url(${layer3})` }}
      />
      <ParallaxLayer
        className="parallax-layer layer4"
        data-depth="0"
        style={{ backgroundImage: `url(${layer4})` }}
      >
        <ButtonOverlay>
          <KakaoShareButton />
          <ShareButton onClick={handleCopy}>링크 복사</ShareButton>
        </ButtonOverlay>
        <CopyRight>copyright © onnuri. All rights reserved.</CopyRight>
      </ParallaxLayer>
    </FooterWrapper>
  );
};

export default Footer;
const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 800px;
  max-width: 480px;
  margin: 0 auto;
  padding-top: 50px;
  overflow: hidden;
`;
const TimeText = styled.p`
  padding-top: 20px;
  text-align: center;
  font-family: basicFont;
`;

const ParallaxLayer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-position: center bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  will-change: transform;
  &.layer1 {
    bottom: 100px;
  }
  &.layer2 {
    bottom: -180px;
  }
  &.layer3 {
    bottom: -400px;
  }
  &.layer4 {
    bottom: -200px;
  }
`;
const ButtonOverlay = styled.div`
  position: absolute;
  bottom: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 10;
`;

const ShareButton = styled.button`
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 6px;
  color: #333;
  border: 1px solid #ccc;
  background-color: transparent;
  cursor: pointer;
  font-family: basicFont;
  transition: background 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const CopyRight = styled.p`
  position: absolute;
  bottom: 220px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: roundedFont;
  font-size: 12px;
  color: #333;
`;
