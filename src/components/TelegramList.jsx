import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import TelegramBox from "./TelegramBox.jsx";

const Telegrams = styled.div`
  height: 500px;
  padding-top: 31.5px;
  border-top: 3px dashed black;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #f6ebe2;
`;
function TelegramList() {
  return (
    <>
      <Telegrams>
        <TelegramBox></TelegramBox>
        <TelegramBox></TelegramBox>
        <TelegramBox></TelegramBox>
        <TelegramBox></TelegramBox>
        <TelegramBox></TelegramBox>
        <TelegramBox></TelegramBox>
      </Telegrams>
    </>
  );
}

export default TelegramList;
