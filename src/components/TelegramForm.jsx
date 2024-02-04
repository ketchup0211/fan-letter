import { createContext, useContext, useState } from "react";
import { FormContainer, FormReceiver, SubmitBtn } from "./HomeStyles";
import { ReceiverContext } from "./HomeBody";
import { v4 as uuid } from "uuid";
import getCurrentTime from "./modules/getCurrentTime";
import Message from "./FormMessage";
import Sender from "./FormSender";

//  TelegramForm.jsx
function TelegramForm() {
  const { receiver } = useContext(ReceiverContext);

  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");

  const addLocalStorage = () => {
    const currentTime = getCurrentTime();
    const newData = {
      message,
      sender: nickname,
      creationTime: currentTime,
      id: uuid(),
    };

    const oldData = JSON.parse(localStorage.getItem(receiver) || "[]");
    const updatedData = [newData, ...oldData];

    localStorage.setItem(receiver, JSON.stringify(updatedData));
  };

  return (
    <FormContainer onSubmit={addLocalStorage}>
      <FormReceiver>To. {receiver} 님께</FormReceiver>
      <MessageContext.Provider value={{ message, setMessage }}>
        <Message />
      </MessageContext.Provider>
      <NicknameContext.Provider value={{ nickname, setNickname }}>
        <Sender />
      </NicknameContext.Provider>
      <SubmitBtn type="submit">전송하기</SubmitBtn>
    </FormContainer>
  );
}

export const MessageContext = createContext();
export const NicknameContext = createContext();
export default TelegramForm;
