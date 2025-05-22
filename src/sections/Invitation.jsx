import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { INVITATION_MESSAGE } from "../constants/customInfo";

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
      {INVITATION_MESSAGE.trim()
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
