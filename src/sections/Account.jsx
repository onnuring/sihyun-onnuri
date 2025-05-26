import React, { useState } from "react";
import styled from "styled-components";
import { BRIDE_ACCOUNTS, GROOM_ACCOUNTS } from "../constants/customInfo";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import CopyButton from "../components/CopyButton";

const Account = () => {
  const [openSections, setOpenSections] = useState({
    groom: false,
    bride: false,
  });

  const handleToggle = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderAccounts = (data) =>
    data.map(({ name, bank, account }, i) => (
      <AccountItem key={i}>
        <NameText>{name}</NameText>
        <AccountInfo>
          <div>
            <AccountBank>{bank}</AccountBank>
            {account}
          </div>
          <CopyButton text={account} />
        </AccountInfo>
      </AccountItem>
    ));

  return (
    <AccountWrapper>
      <TitleWrapper>
        <SubTitle>wedding blessings</SubTitle>
        <Title>마음 전하실 곳</Title>
      </TitleWrapper>
      <Anouncement>
        멀리서도 축하의 마음을
        <br /> 전하고 싶으신 분들을 위해
        <br />
        계좌번호를 안내드립니다.
      </Anouncement>
      <Accordion>
        {[
          { key: "groom", label: "신랑측 계좌정보", data: GROOM_ACCOUNTS },
          { key: "bride", label: "신부측 계좌정보", data: BRIDE_ACCOUNTS },
        ].map(({ key, label, data }) => (
          <AccordionWrapper key={key} $isOpen={openSections[key]}>
            <AccordionHeader
              onClick={() => handleToggle(key)}
              aria-expanded={openSections[key]}
            >
              {label}
              <ArrowIcon
                className="material-symbols-outlined"
                $isOpen={openSections[key]}
              >
                keyboard_arrow_down
              </ArrowIcon>
            </AccordionHeader>
            <AccordionContent
              $isOpen={openSections[key]}
              aria-hidden={!openSections[key]}
            >
              <Inner>{renderAccounts(data)}</Inner>
            </AccordionContent>
          </AccordionWrapper>
        ))}
      </Accordion>
    </AccountWrapper>
  );
};

export default Account;
const AccountWrapper = styled.section`
  max-width: 480px;
  margin: 0 auto;
  padding: 80px 20px;
  font-family: basicFont;
`;
const TitleWrapper = styled.div`
  margin-bottom: 50px;
`;
const Anouncement = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 50px;
`;
const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const AccordionWrapper = styled.div`
  border: 1px solid #f0eae7;
  border-radius: 8px;
  overflow: hidden;
`;

const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-family: basicFont;
  padding: 14px 16px;
  text-align: left;
  background-color: #f8f4f2;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #f0eae7;
  }
`;
const ArrowIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 20px;
  color: #333;
  transition: transform 0.3s ease;
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
`;

const AccordionContent = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  transition: all 0.5s ease-in-out;
  will-change: max-height;
  background-color: #fff9f6;
`;
const Inner = styled.div`
  padding: 16px 16px 0;
`;

const AccountItem = styled.div`
  padding: 12px 0;
  font-size: 14px;
  border-bottom: 1px solid #f0eae7;
  &:last-child {
    border-bottom: none;
  }
`;

const NameText = styled.div`
  flex: 1;
  font-size: 16px;
  margin-bottom: 5px;
`;

const AccountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-break: break-all;
  font-size: 14px;
  color: #333;
`;

const AccountBank = styled.span`
  margin-right: 5px;
`;
