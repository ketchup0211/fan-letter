import { useContext } from "react";
import { ReceiverContext } from "./HomeBody";
import charactersDataList from "../shared/charactersDataList";
import styled from "styled-components";
import "../fonts.css";

const NameButton = styled.button`
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

//  NameBoxes.jsx
function NameBoxes() {
  const { setReceiver, receiver } = useContext(ReceiverContext);

  return (
    <>
      {charactersDataList.map((character) => (
        <NameButton
          key={character}
          onClick={() => setReceiver(character)}
          selected={receiver === character}
        >
          {character}
        </NameButton>
      ))}
    </>
  );
}

export default NameBoxes;
