import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";

const TelegramBox = styled.div`
  margin: 31.5px;

  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Receiver = styled.p`
  text-align: left;
  font-size: 21px;
  font-family: NEXON Lv2 Gothic;
`;

const Sender = styled.p`
  text-align: right;
  font-size: 21px;
  font-family: NEXON Lv2 Gothic;
  margin-top: 12px;
`;

const Message = styled.input`
  padding: 10px 0px 3px 5px;
  margin-top: 12px;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 16px;
  border-width: 0px 0px 1px;
  &:focus {
    outline: none;
  }
  overflow: hidden;
`;

const SubmitBtn = styled.button`
  align-self: flex-end;
  border: 2px solid black;
  background-color: white;
  font-size: 15px;
  font-family: NEXON Lv2 Gothic;
  border-radius: 8px;
  padding: 3px;
  margin-top: 20px;
  width: 100px;
  height: 30px;
`;

function TelegramForm() {
  return (
    <TelegramBox>
      <Receiver>TO. 침착맨 님께</Receiver>
      <Message
        type="text"
        placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
        maxLength={150}
      />
      <Sender>FROM. 스페이스와 함께 "하늘물결"</Sender>
    </TelegramBox>
  );
}

export default TelegramForm;
