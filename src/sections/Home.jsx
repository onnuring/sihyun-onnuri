import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { paperBackground } from "../assets/images";
import Invitation from "./Invitation";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { sealingWax } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const topRef = useRef(null);
  const textRef = useRef(null);
  const hasPlayed = useRef(false);
  const nameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 병렬 애니메이션 타임라인
      gsap.set(wrapperRef.current, { scale: 0.5 });
      gsap.set(nameRef.current, { bottom: "-10vh", opacity: 0 });
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
                  ".invitation-text div",
                  { opacity: 0, y: 10 },
                  {
                    opacity: 1,
                    y: 0,
                    stagger: 1.0,
                    duration: 3,
                    ease: "power2.out",
                  }
                );
              }

              if (progress < 0.1 && hasPlayed.current) {
                hasPlayed.current = false;

                gsap.killTweensOf(".invitation-text div");
                gsap.set(".invitation-text div", {
                  opacity: 0,
                  y: 10,
                  clearProps: "all", // 스타일 잔재 제거
                });
              }
            },
          },
        })
        .to(
          topRef.current,
          {
            rotateX: 100,
            duration: 4,
            ease: "power2.out",
            transformOrigin: "top center",
          },
          0.6
        )
        .to(
          wrapperRef.current,
          {
            scale: 1,
            duration: 6,
            y: -50, // 아래 쪽으로 이동
            ease: "power2.out",
          },
          0.2
        )
        .to(
          textRef.current,
          {
            opacity: 0,
            ease: "power2.out",
          },
          1.6
        )
        .to(
          nameRef.current,
          {
            duration: 4,
            bottom: "10vh",
            opacity: 1,
            ease: "power2.out",
          },
          3
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <HomeContainer ref={containerRef}>
      <PaperWrapper ref={wrapperRef}>
        <PaperBottom>
          <TitleWrap>
            <SubTitle>a celebration of our love</SubTitle>
            <Title>소중한 분들을 초대합니다</Title>
          </TitleWrap>
          <Invitation />
          <BottomText>
            <p>2025년 7월 19일 낮12시</p>
            <p>Maison D'ltalie</p>
          </BottomText>
        </PaperBottom>
        <PaperTop ref={topRef}>
          <TextWrapper ref={textRef}>
            <h2>Sihyun</h2>
            <p>and</p>
            <h2>Onnuri</h2>
          </TextWrapper>
          <SealingImg>
            <img src={sealingWax} alt="sealing wax" />
          </SealingImg>
        </PaperTop>
      </PaperWrapper>
      <NameWrapper ref={nameRef}>
        <p>
          김태한 <span className="heart">❤︎</span> 장재연 <span>의 차남</span>{" "}
          김시현
        </p>
        <p>
          김진호 <span className="heart">❤︎</span> 이가인 <span>의 차녀</span>{" "}
          김온누리
        </p>
      </NameWrapper>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PaperWrapper = styled.div`
  width: 100vw;
  height: 100vw;
  max-width: 480px;
  max-height: 480px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
`;

const PaperFace = styled.div`
  background-image: url(${paperBackground});
  background-size: contain;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: serif;
  font-size: 1.2rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  backface-visibility: visible;
  position: absolute;
  left: 0;
`;

const PaperBottom = styled(PaperFace)`
  top: 0;
  padding: 26px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;
const TitleWrap = styled.div``;

const PaperTop = styled(PaperFace)`
  top: 0;
  height: 72%;
  max-height: 365px;
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
  transform: translateZ(1px);
  h2 {
    font-size: 60px;
    font-weight: 100;
  }
  p {
    font-size: 50px;
    font-weight: 100;
  }
`;
const SealingImg = styled.div`
  position: absolute;
  bottom: -35px;
  width: 70px;
  height: 70px;
  img {
    display: block;
    width: 100%;
  }
`;

const BottomText = styled.div`
  font-family: basicFont;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  p {
    font-size: 18px;
  }
  p:last-child {
    font-family: serif;
  }
`;

const NameWrapper = styled.div`
  position: absolute;
  font-family: basicFont;
  p {
    font-size: 18px;
    line-height: 2;
    span {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }
    .heart {
      font-size: 8px;
      color: #000;
      vertical-align: middle;
    }
  }
`;
