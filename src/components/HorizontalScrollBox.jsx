import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import charactersDataList from "../shared/charactersDataList";
import styled from "styled-components";
import "../fonts.css";
import { NameContainer } from "./HomeStyles";

const NameBox = styled.button`
  background-color: ${({ selected }) => (selected ? "#fca600" : "white")};
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

function HorizontalScrollBox({ setReceiver, receiver }) {
  return (
    <NameContainer>
      {charactersDataList.map((character) => (
        <NameBox
          onClick={() => setReceiver(character)}
          selected={receiver === character}
          key={character}
        >
          {character}
        </NameBox>
      ))}
    </NameContainer>
  );
}

export default HorizontalScrollBox;
