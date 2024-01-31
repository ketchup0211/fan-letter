import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import StBody from "../components/StBody";
import { useNavigate, useParams } from "react-router-dom";
const MAIN_COLOR = "#f6ebe2";

const StBanner = styled.div`
  background-image: url("public/images/chim-ha-ha.png");
  text-align: center;
  padding: 60px;
  border-bottom: 3px dashed black;
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
  margin-top: 6px;
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
`;
function Telegram() {
  const params = useParams();

  const navigate = useNavigate();
  return (
    <>
      <StBanner>
        <GoHomeBtn onClick={() => navigate("/")}>홈으로</GoHomeBtn>
        <StSubTitle>이참 님이 {params.receiver} 님에게 보낸 전보</StSubTitle>
      </StBanner>
      <StBody />
    </>
  );
}

export default Telegram;
