import {
  TelegramContainer,
  TelegramSender,
  MessageField,
  BtnContainer,
  Button,
} from "./DetailStyles";
import { useState } from "react";
import {
  modifyMessage,
  letModified,
  setOnModifing,
  onDelete,
} from "./modules/DetailFunctions";
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
            modify
              ? letModified(params, modMessage, message)
              : setOnModifing(setModify)
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
