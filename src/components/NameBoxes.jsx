import { useSelector, useDispatch } from "react-redux";
import { configReceiver } from "../redux/modules/MainDataReducer";
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
  const dispatch = useDispatch();
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  return (
    <>
      {charactersDataList.map((character) => (
        <NameButton
          key={character}
          onClick={() => dispatch(configReceiver(character))}
          selected={receiver === character}
        >
          {character}
        </NameButton>
      ))}
    </>
  );
}

export default NameBoxes;
