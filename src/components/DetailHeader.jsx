import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import { useNavigate, useParams } from "react-router-dom";
const MAIN_COLOR = "#f6ebe2";

/*
 *  Styled Components
 */

const StBanner = styled.div`
  text-align: center;
  padding: 100px 30px 30px;
  margin-bottom: 10px;
`;

const GoHomeBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 30px;
  background-color: white;
  border: 2px solid black;
  border-radius: 180px;
  font-family: GangwonEduPowerExtraBoldA;
  font-size: 20px;
  padding: 10px;
`;

const StSubTitle = styled.p`
  font-family: NEXON Lv2 Gothic;
  font-size: 30px;
`;

function DetailHeader({ sender, receiver, goHome }) {
  return (
    <StBanner>
      <GoHomeBtn onClick={goHome}>홈으로</GoHomeBtn>
      <StSubTitle>
        {sender} 님이 {receiver} 님에게 보낸 전보
      </StSubTitle>
    </StBanner>
  );
}

export default DetailHeader;
