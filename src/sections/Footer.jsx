import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { layer1, layer2, layer3, layer4 } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

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
              start: "top bottom",
              end: "bottom top",
              scrub: true,
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
        data-depth="0.3"
        style={{ backgroundImage: `url(${layer2})` }}
      />
      <ParallaxLayer
        className="parallax-layer layer3"
        data-depth="0.4"
        style={{ backgroundImage: `url(${layer3})` }}
      />
      <ParallaxLayer
        className="parallax-layer layer4"
        data-depth="0.9"
        style={{ backgroundImage: `url(${layer4})` }}
      />
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
  overflow: hidden;
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
    bottom: -50px;
  }
  &.layer3 {
    bottom: -150px;
  }
  &.layer4 {
    bottom: -400px;
  }
`;
