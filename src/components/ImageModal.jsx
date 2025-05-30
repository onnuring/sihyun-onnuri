import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const ImageModal = ({ images, initialIndex, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon className="material-symbols-outlined">close</CloseIcon>
        </CloseButton>
        <Swiper
          initialSlide={initialIndex}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`slide-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ModalContainer>
    </Overlay>
  );
};

export default ImageModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin: 0 auto;
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 480px;
  background: transparent;

  overflow: hidden;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 28px;
  font-weight: 100;
  background: none;
  border: none;
  color: #fff;
  z-index: 1000;
  cursor: pointer;
  mix-blend-mode: difference;
`;
const CloseIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 40px;
  color: #fff;
  font-weight: 400;
`;
