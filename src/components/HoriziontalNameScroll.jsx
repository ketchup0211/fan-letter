import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";

const HorizontalScrollBox = styled.div`
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

const chimWorldCharacters = [
  "침착맨",
  "배성재",
  "주펄",
  "주우재",
  "곽튜브",
  "궤도",
  "박정민",
  "승우아빠",
  "매직박",
  "통닭천사",
  "빠니보틀",
  "곽민수",
  "임세모",
  "철면수심",
  "김풍",
  "단군",
  "심윤수",
];

function HoriziontalNameScroll() {
  return (
    <HorizontalScrollBox>
      {chimWorldCharacters.map((character) => (
        <NameBox key={character}>{character}</NameBox>
      ))}
    </HorizontalScrollBox>
  );
}

export default HoriziontalNameScroll;
