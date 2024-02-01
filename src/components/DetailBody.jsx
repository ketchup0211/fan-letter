import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import { useNavigate, useParams } from "react-router-dom";
const MAIN_COLOR = "#f6ebe2";
import DetailHeader from "../components/DetailHeader";

/*
 *  Styled Components
 */

const Sender = styled.p`
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
`;
const ModifyField = styled.textarea`
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  border: 2px solid black;
  height: 130px;
  width: 100%;
  resize: none;
  background-color: white;
  &:focus {
    outline-color: #f39009;
    &::placeholder {
      color: transparent;
    }
  }
  font-family: NEXON Lv2 Gothic;
`;

const MessageField = styled.p`
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  background-color: white;
  border: 2px solid black;
  max-width: 650px;
  font-family: NEXON Lv2 Gothic;
`;

const TelegramContainer = styled.div`
  padding: 20px;
  margin: 0px auto;
  width: 600px;
  background-color: #f6ebe2;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StButton = styled.button`
  display: inline;
  flex-basis: 45%;
  height: 35px;
  border: 2px solid black;
  font-family: NEXON Lv2 Gothic;
`;
function DetailBody({
  sender,
  modify,
  setModify,
  message,
  modMessage,
  setmodMessage,
  modifyMessage,
  letModified,
  setOnModifing,
  onDelete,
}) {
  return (
    <TelegramContainer>
      <Sender>Sender. {sender}</Sender>

      {modify ? (
        <ModifyField
          type="text"
          name="message"
          maxLength={150}
          value={modMessage}
          onChange={modifyMessage}
          placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
          autoFocus
          required
        />
      ) : (
        <MessageField>{message}</MessageField>
      )}

      <BtnContainer>
        {modify ? (
          <StButton onClick={letModified}>수정 완료</StButton>
        ) : (
          <StButton onClick={setOnModifing}>수정</StButton>
        )}
        {modify ? (
          <StButton
            onClick={() => {
              setModify(false);
              setmodMessage(message);
            }}
          >
            취소
          </StButton>
        ) : (
          <StButton onClick={onDelete}>삭제</StButton>
        )}
      </BtnContainer>
    </TelegramContainer>
  );
}

export default DetailBody;
