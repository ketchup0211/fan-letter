import {
  TelegramContainer,
  TelegramSender,
  MessageField,
  BtnContainer,
  Button,
} from "./DetailStyles";
import { useState } from "react";
import { onDelete } from "./modules/DetailFunctions";
import ModifyContainer from "./ModifyContainer";

function DetailBody({ params, sender, message }) {
  //  State for check modify-ing
  let [modify, setModify] = useState(false);
  //  State for message modify
  let [modMessage, setmodMessage] = useState(message);

  //  Modify-ing Message
  const modifyMessage = (e) => {
    setmodMessage(e.target.value);
  };
  const setEditing = () => {
    setModify(true);
  };
  // Change Local Storage Data(Message)
  const setModified = (params, modMessage, message) => {
    const parsedData = getLocalData(params.receiver);
    if (modMessage !== message) {
      const updatedData = parsedData.map((item) =>
        item.id === params.id ? { ...item, message: modMessage } : item
      );
      localStorage.setItem(params.receiver, JSON.stringify(updatedData));
      alert("수정되었습니다.");
    } else {
      alert("아무런 수정사항이 없습니다.");
    }

    setModify(false);
    goHome();
  };
  return (
    <TelegramContainer>
      <TelegramSender>Sender. {sender}</TelegramSender>
      {modify ? (
        <ModifyContainer
          modifyMessage={modifyMessage}
          modMessage={modMessage}
        />
      ) : (
        <MessageField>{message}</MessageField>
      )}
      <BtnContainer>
        <Button
          onClick={
            modify ? setModified(params, modMessage, message) : setEditing
          }
        >
          {modify ? "수정 완료" : "수정"}
        </Button>
        <Button
          onClick={
            modify
              ? () => {
                  setModify(false);
                  setmodMessage(message);
                }
              : onDelete
          }
        >
          {modify ? "취소" : "삭제"}
        </Button>
      </BtnContainer>
    </TelegramContainer>
  );
}

export default DetailBody;
