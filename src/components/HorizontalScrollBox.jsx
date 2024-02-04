import charactersDataList from "../shared/charactersDataList";
import styled from "styled-components";
import "../fonts.css";
import { NameContainer } from "./HomeStyles";
import { useContext } from "react";
import { ReceiverContext } from "./HomeBody";

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

function HorizontalScrollBox() {
  const { setReceiver, receiver } = useContext(ReceiverContext);

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
