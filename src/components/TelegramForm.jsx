import { FormContainer, FormReceiver, SubmitBtn } from "./HomeStyles";
import { v4 as uuid } from "uuid";
import getCurrentTime from "./modules/getCurrentTime";
import Message from "./FormMessage";
import Sender from "./FormSender";
import { useSelector, useDispatch } from "react-redux";
import {
  configMessage,
  configReceiver,
  configSender,
} from "../redux/modules/MainDataReducer";

//  TelegramForm.jsx
function TelegramForm() {
  const dispatch = useDispatch();
  const { receiver, sender, message } = useSelector(
    (state) => state.MainDataReducer
  );

  const addLocalStorage = (event) => {
    event.preventDefault();
    const currentTime = getCurrentTime();
    const newData = {
      message,
      sender,
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
