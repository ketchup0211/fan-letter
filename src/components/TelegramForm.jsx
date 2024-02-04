import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  FormContainer,
  FormReceiver,
  FormSender,
  FormMessage,
  SubmitBtn,
} from "./HomeStyles";
import getCurrentTime from "./modules/getCurrentTime";
import dynamicHeight from "./modules/dynamicHeight";
import { ReceiverContext } from "./HomeBody";

function TelegramForm() {
  const { receiver } = useContext(ReceiverContext);
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");

  const onMessageChange = (event) => {
    dynamicHeight(event);
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
    <FormContainer onSubmit={validCheck}>
      <FormReceiver>To. {receiver || "NULL"} 님께</FormReceiver>
      <FormMessage
        type="text"
        name="message"
        placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
        onChange={onMessageChange}
        maxLength={150}
        value={message}
        required
      />
      <FormSender>
        From.{" "}
        <input
          type="text"
          name="nickname"
          placeholder="닉네임(최대 10자)"
          autoComplete="off"
          onChange={onNicknameChange}
          maxLength={10}
          value={nickname}
          required
        ></input>
      </FormSender>
      <SubmitBtn type="submit">전송하기</SubmitBtn>
    </FormContainer>
  );
}

export default TelegramForm;
