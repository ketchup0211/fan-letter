import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import TelegramForm from "./TelegramForm";
import TelegramList from "./TelegramList";

const NameContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 50px 30px 0px 30px;
`;

const NameBox = styled.button`
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 20px;
  font-family: NEXON Lv2 Gothic;
  margin: 0px 5px;
  padding: 2px;
  width: 100px;
  &:hover {
    background-color: #fca600;
    cursor: pointer;
  }
`;

function HorizontalScrollBox({ characters, setReceiver }) {
  return (
    <NameContainer>
      {characters.map((character) => (
        <NameBox onClick={() => setReceiver(character)} key={character}>
          {character}
        </NameBox>
      ))}
    </NameContainer>
  );
}

export default HorizontalScrollBox;
