import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import StBody from "../components/StBody";
import { Link } from "react-router-dom";

/*
 *  Styled Components
 */

const StBanner = styled.div`
  background-image: url("images/chim-ha-ha.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  text-align: center;
  padding: 60px;
  border-bottom: 3px dashed black;
`;

const StTitle = styled.h1`
  font-family: GangwonEduPowerExtraBoldA;
  font-size: 80px;
  & * {
    text-decoration: none;
    color: black;
  }
`;

const StSubTitle = styled.p`
  margin-top: 6px;
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
`;

function Home() {
  return (
    <>
      <StBanner>
        <StTitle title="침하하 바로가기">
          <Link to="https://chimhaha.net" target="_blank">
            침하하
          </Link>
        </StTitle>
        <StSubTitle>17개 국에 전보 보내기</StSubTitle>
      </StBanner>
      <StBody />
    </>
  );
}

export default Home;
