import React from "react";
import styled from "styled-components";

const SubTitle = ({ children, fontSize, className, fontWeight }) => {
  return (
    <StyledSubTitle
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledSubTitle>
  );
};

export default SubTitle;

const StyledSubTitle = styled.p`
  font-size: ${({ fontSize }) => fontSize || "20px"};
  color: #ae360e;
  font-family: "Cormorant SC", serif;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 6px;

  /* &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    border-bottom: 1px dashed #ae360e;
  } */
`;
