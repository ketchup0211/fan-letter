import { useContext } from "react";
import { FormContainer, FormReceiver, SubmitBtn } from "./HomeStyles";
import { ReceiverContext, FormContext } from "../context/HomeContext";
import { v4 as uuid } from "uuid";
import getCurrentTime from "./modules/getCurrentTime";
import Message from "./FormMessage";
import Sender from "./FormSender";

//  TelegramForm.jsx
function TelegramForm() {
  const { receiver } = useContext(ReceiverContext);
  const { message, nickname } = useContext(FormContext);

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
      <Message />
      <Sender />
      <SubmitBtn type="submit">전송하기</SubmitBtn>
    </FormContainer>
  );
}

export default TelegramForm;
