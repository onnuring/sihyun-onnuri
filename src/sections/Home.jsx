import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { paperBg } from "../styles/paperBg";
import Invitation from "./Invitation";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const topRef = useRef(null);
  const textRef = useRef(null);
  const hasPlayed = useRef(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 병렬 애니메이션 타임라인
      gsap.set(wrapperRef.current, { scale: 0.5 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=1000",
            scrub: 0.7,
            pin: true,
            onUpdate: (self) => {
              const progress = self.progress;

              if (progress > 0.7 && !hasPlayed.current) {
                hasPlayed.current = true;

                gsap.fromTo(
                  ".invitation-text span",
                  { opacity: 0, y: 10 },
                  {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power2.out",
                  }
                );
              }

              if (progress < 0.2 && hasPlayed.current) {
                hasPlayed.current = false;

                gsap.to(".invitation-text span", {
                  opacity: 0,
                  y: -10,
                  duration: 0.4,
                  ease: "power1.in",
                });
              }
            },
          },
        })
        .to(
          topRef.current,
          {
            rotateX: 100,
            duration: 2.5,
            ease: "power2.out",
            transformOrigin: "top center",
          },
          0
        )
        .to(
          wrapperRef.current,
          {
            scale: 1,
            duration: 3.5,
            y: -50, // 아래 쪽으로 이동
            ease: "power2.out",
          },
          0.8
        )
        .to(
          textRef.current,
          {
            opacity: 0,
            ease: "power2.out",
          },
          0.6
        )
        .to(
          bottomRef.current,
          {
            height: "100vh", // ← 펼쳐지면서 화면을 꽉 채움
            duration: 1.2,
            ease: "power2.out",
          },
          2.5 // PaperTop 열리는 시점과 맞춰 조정
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <PaperWrapper ref={wrapperRef}>
        <PaperBottom ref={bottomRef}>
          <Invitation />
        </PaperBottom>
        <PaperTop ref={topRef}>
          <TextWrapper ref={textRef}>
            <h2>Sihyun</h2>
            <p>and</p>
            <h2>Onnuri</h2>
          </TextWrapper>
        </PaperTop>
      </PaperWrapper>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  outline: 2px solid red;
`;

const PaperWrapper = styled.div`
  width: 100vw;
  height: 100vw;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
`;

const PaperFace = styled.div`
  ${paperBg};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: serif;
  font-size: 1.2rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  backface-visibility: visible;
  position: absolute;
  left: 0;
`;

const PaperBottom = styled(PaperFace)`
  top: 0;
  z-index: 1;
`;

const PaperTop = styled(PaperFace)`
  top: 0;
  height: 80vw;
  transform-origin: bottom center;
  transform: rotateX(0deg); /* 접힌 상태에서 시작 */
  z-index: 2;
`;

const TextWrapper = styled.div`
  transition: opacity 0.05s ease-out;
  text-align: center;
  pointer-events: none;
  font-family: "WindSong", cursive;
  font-display: swap;
  z-index: 99;
  h2 {
    font-size: 13.0208vw;
    font-weight: 100;
  }
  p {
    font-size: 9.375vw;
    font-weight: 100;
  }
`;
