import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SubTitle from "../components/SubTitle";
import {
  snap1,
  snap2,
  snap3,
  snap4,
  studio1,
  studio2,
  studio3,
  studio4,
  studio5,
  studio6,
} from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 컬럼별 패럴럭스
      gsap.utils.toArray(".gallery-column").forEach((col) => {
        const speed = parseFloat(col.getAttribute("data-speed") || "1");
        gsap.to(col, {
          y: `${(1 - speed) * 800}px`,
          ease: "none",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      });
    }, galleryRef);

    return () => ctx.revert(); // 컴포넌트 언마운트 시 트리거 제거
  }, []);

  // 2개의 컬럼으로 나누기
  const leftImages = [studio1, studio3, snap2, snap4, studio6];
  const rightImages = [studio2, snap1, snap3, studio4, studio5];

  return (
    <GalleryWrapper ref={galleryRef}>
      <TitleWrapper>
        <SubTitle
          className={"filter-text"}
          fontSize={"80px"}
          fontWeight={"700"}
        >
          gallery
        </SubTitle>
      </TitleWrapper>
      <Columns>
        <Column className="gallery-column" data-speed="1.9">
          {leftImages.map((src, i) => (
            <ImageBox key={`left-${i}`}>
              <img src={src} alt={`wedding left ${i}`} />
            </ImageBox>
          ))}
        </Column>
        <Column className="gallery-column" data-speed="2.2">
          {rightImages.map((src, i) => (
            <ImageBox key={`right-${i}`}>
              <img src={src} alt={`wedding right ${i}`} />
            </ImageBox>
          ))}
        </Column>
      </Columns>
    </GalleryWrapper>
  );
};

export default Gallery;

const GalleryWrapper = styled.section`
  max-width: 480px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 70px 20px 0;
  position: relative;
`;
const TitleWrapper = styled.div`
  margin-bottom: 50px;
  z-index: 3;
  .filter-text {
    z-index: 3;
    mix-blend-mode: color-dodge;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImageBox = styled.div`
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto; /* 비율 유지 */
    display: block;
  }
`;
