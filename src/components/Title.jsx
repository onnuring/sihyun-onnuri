import React from "react";
import styled from "styled-components";

const Title = ({ textAlign = "center", children }) => {
  return <Text style={{ textAlign }}>{children}</Text>;
};

export default Title;

const Text = styled.h2`
  font-size: 22px;
  font-weight: 200;
  font-family: basicFont;
`;
