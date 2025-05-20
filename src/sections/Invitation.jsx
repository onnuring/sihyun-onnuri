import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// const message = `
// 7년 전 여름날 부터,
// 긴 시간 한결같은 마음으로 이어온 저희 사랑도
// 이제 부부로서 새로운 여름을 맞이하려 합니다.

// 저희 두 사람의 뜻깊은 날,
// 귀한 분들을 모시고 첫걸음을 내딛고자 합니다.
// 기쁨의 순간에 함께해 주신다면,
// 그 따뜻한 축복을 오래도록 간직하겠습니다.
// `;
const message = `
오랜 시간 함께해 온 저희가
이제 부부로서 새로운 출발을 하려합니다.
저희 두 사람이 첫걸음을 내딛는 
기쁨의 순간에 함께해 주신다면,
그 따뜻한 축복을 오래도록 간직하겠습니다.
`;

const Invitation = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
    gsap.from(lineRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 1.0,
      duration: 3.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <InvitationWrapper className="invitation-text">
      {message
        .trim()
        .split("\n")
        .map((line, index) => (
          <Line key={index} ref={(el) => (lineRefs.current[index] = el)}>
            {line}
          </Line>
        ))}
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  font-size: 16px;
  text-align: center;
  font-family: invitationFont;
  color: #1f1f1f;
  line-height: 2.3;
`;

const Line = styled.div`
  opacity: 0;
  transform: translateY(20px);
`;
