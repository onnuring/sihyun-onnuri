import React from "react";
import styled from "styled-components";
const CopyButton = ({ copyText, obj }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    alert(`${obj} 복사되었습니다.`);
  };
  return (
    <StyledButton onClick={handleCopy}>
      <CopyIcon className="material-symbols-outlined">content_copy</CopyIcon>
      복사하기
    </StyledButton>
  );
};

export default CopyButton;
const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 4px 8px;
  font-family: roundedFont;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #ae360e;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  color: #ae360e;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #faece4;
  }
`;
const CopyIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 20px;
  color: #ae360e;
`;
