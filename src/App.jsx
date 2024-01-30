import { useState } from "react";
import styled from "styled-components";
import "./fonts.css";
import StBody from "./components/StBody";

const StBanner = styled.div`
  background-image: url("public/images/chim-ha-ha.png");
  text-align: center;
  padding: 60px;
  border-bottom: 3px dashed black;
`;

const StTitle = styled.h1`
  font-family: GangwonEduPowerExtraBoldA;
  font-size: 80px;
`;

const StSubTitle = styled.p`
  margin-top: 6px;
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
`;

function App() {
  return (
    <>
      <StBanner>
        <StTitle>침하하</StTitle>
        <StSubTitle>17개 국에 전보 보내기</StSubTitle>
      </StBanner>
      <StBody />
    </>
  );
}

export default App;
