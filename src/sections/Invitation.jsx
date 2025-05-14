import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const message = "저희 결혼합니다. 함께 축하해주세요.";

const Invitation = () => {
  const textRef = useRef([]);

  useEffect(() => {
    gsap.from(
      textRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.6,
      }
    );
  }, []);

  return (
    <Wrapper className="invitation-text">
      {message.split("").map((char, i) => (
        <Letter key={i} ref={(el) => (textRef.current[i] = el)}>
          {char === " " ? "\u00A0" : char}
        </Letter>
      ))}
    </Wrapper>
  );
};

export default Invitation;

const Wrapper = styled.div`
  position: absolute;
  top: 20vh;
  outline: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  white-space: pre-wrap;
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(10px); /* 초기 위치 */
`;
