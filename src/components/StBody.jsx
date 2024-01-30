import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import TelegramForm from "./TelegramForm";
import TelegramList from "./TelegramList";
import HorizontalScrollBox from "./HorizontalScrollBox";

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

function StBody() {
  const [receiver, setReceiver] = useState();
  return (
    <>
      <HorizontalScrollBox
        characters={chimWorldCharacters}
        setReceiver={setReceiver}
      />
      <TelegramForm receiver={receiver} />
      <TelegramList about={receiver} />
    </>
  );
}

export default StBody;
