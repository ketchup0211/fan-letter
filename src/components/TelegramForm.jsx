import { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import "../fonts.css";
import getCurrentTime from "./getCurrentTime";

const TelegramBox = styled.form`
  margin: 31.5px;
  margin-bottom: 50px;
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
  margin-top: 20px;
  & * {
    font-family: NEXON Lv2 Gothic;
    border-width: 0px;
    &:focus {
      outline: none;
    }
    font-size: 18px;
    width: 190px;
  }
`;

const Message = styled.textarea`
  padding: 10px 0px 0px 0px;
  margin-top: 12px;
  font-size: 18px;
  text-indent: 10px;
  border: 0px;
  height: 100px;
  resize: none;
  height: auto;
  &:focus {
    outline: none;
    border-width: 0px;
    &::placeholder {
      color: transparent;
    }
  }
  font-family: NEXON Lv2 Gothic;
`;

const SubmitBtn = styled.button`
  align-self: flex-end;
  border: 2px solid black;
  background-color: white;
  font-size: 20px;
  font-family: NEXON Lv2 Gothic;
  border-radius: 8px;
  padding: 3px;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  &:hover {
    cursor: pointer;
    background-color: #fca600;
  }
`;

function TelegramForm({ receiver }) {
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const onNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const addLocalStorage = () => {
    const currentTime = getCurrentTime();
    const id = uuid();
    const newData = {
      message,
      sender: nickname,
      creationTime: currentTime,
      id,
    };

    let oldData = JSON.parse(localStorage.getItem(receiver) || "[]");
    oldData.unshift(newData);

    localStorage.setItem(receiver, JSON.stringify(oldData));
  };

  const validCheck = () => {
    !receiver ? window.alert("수신자를 선택해주세요") : addLocalStorage();
  };

  return (
    <TelegramBox onSubmit={validCheck}>
      <Receiver>To. {receiver || "NULL"} 님께</Receiver>
      <Message
        type="text"
        name="message"
        placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
        onChange={onMessageChange}
        maxLength={150}
        rows={1}
        value={message}
        required
      />
      <Sender>
        From.{" "}
        <input
          type="text"
          name="nickname"
          placeholder="닉네임(최대 10자)"
          onChange={onNicknameChange}
          maxLength={10}
          value={nickname}
          required
        ></input>
      </Sender>
      <SubmitBtn type="submit">전송하기</SubmitBtn>
    </TelegramBox>
  );
}

export default TelegramForm;
