import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SubTitle from "../components/SubTitle";
import ImageModal from "../components/ImageModal";
import { LEFT_IMAGES, RIGHT_IMAGES } from "../constants/customInfo";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  useEffect(() => {
    if (isModalOpen) {
      // 스크롤 막기
      document.body.style.overflow = "hidden";
    } else {
      // 스크롤 다시 허용
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      window.addEventListener("load", () => ScrollTrigger.refresh(true));
      // 컬럼별 패럴럭스
      gsap.utils.toArray(".gallery-column").forEach((col) => {
        const speed = parseFloat(col.getAttribute("data-speed") || "1");
        gsap.to(col, {
          y: `${(1 - speed) * 500}px`,
          ease: "none",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
      });
    }, galleryRef);

    return () => ctx.revert(); // 컴포넌트 언마운트 시 트리거 제거
  }, []);

  // 2개의 컬럼으로 나누기

  const allImages = [...LEFT_IMAGES, ...RIGHT_IMAGES];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    <GalleryWrapper ref={galleryRef}>
      <TitleWrapper>
        <SubTitle
          className={"filter-text"}
          fontSize={"80px"}
          fontWeight={"900"}
        >
          gallery
        </SubTitle>
      </TitleWrapper>
      <Columns>
        <Column className="gallery-column" data-speed="2.4">
          {LEFT_IMAGES.map((src, i) => (
            <ImageBox key={`left-${i}`} onClick={() => handleImageClick(i)}>
              <img src={src} alt={`wedding left ${i}`} />
            </ImageBox>
          ))}
        </Column>
        <Column className="gallery-column" data-speed="3.0">
          {RIGHT_IMAGES.map((src, i) => (
            <ImageBox
              key={`right-${i}`}
              onClick={() => handleImageClick(i + LEFT_IMAGES.length)}
            >
              <img src={src} alt={`wedding right ${i}`} />
            </ImageBox>
          ))}
        </Column>
      </Columns>
      {isModalOpen && (
        <ImageModal
          images={allImages}
          initialIndex={currentIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </GalleryWrapper>
  );
};

export default Gallery;

const GalleryWrapper = styled.section`
  max-width: 480px;
  width: 100vw;
  height: 2200px;
  margin: 0 auto;
  padding: 70px 20px;
  overflow: hidden;
  @media (max-width: 413px) {
    height: 2000px;
  }

  /* ~360px */
  @media (max-width: 360px) {
    height: 1800px;
  }
`;
const TitleWrapper = styled.div`
  margin-bottom: 50px;

  .filter-text {
    z-index: 3;
    mix-blend-mode: color-dodge;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  z-index: 1;
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
    height: auto;
    display: block;
  }
`;
