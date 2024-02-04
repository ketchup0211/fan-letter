import {
  TelegramContainer,
  TelegramSender,
  ModifyField,
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

function DetailBody({ params, sender, message }) {
  //  State for check modify-ing
  let [modify, setModify] = useState(false);
  //  State for message modify
  let [modMessage, setmodMessage] = useState(message);

  return (
    <TelegramContainer>
      <TelegramSender>Sender. {sender}</TelegramSender>
      {modify ? (
        <ModifyField
          type="text"
          name="message"
          maxLength={150}
          value={modMessage}
          onChange={modifyMessage(e, setmodMessage)}
          placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
          autoFocus
          required
        />
      ) : (
        <MessageField>{message}</MessageField>
      )}
      <BtnContainer>
        <Button onClick={modify ? letModified : setOnModifing}>
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
