import { useState } from "react";
import styled from "styled-components";
import "./fonts.css";
import HoriziontalNameScroll from "./components/HoriziontalNameScroll";
import TelegramForm from "./components/TelegramForm";

const StBanner = styled.div`
  background-image: url("../assets/images/chim-ha-ha.png");
  text-align: center;
  padding: 40px;
`;

const StTitle = styled.h1`
  font-family: GangwonEduPowerExtraBoldA;
  font-size: 60px;
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
      <HoriziontalNameScroll />
      <TelegramForm />
    </>
  );
}

export default App;
