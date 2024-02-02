import {
  TelegramContainer,
  TelegramSender,
  ModifyField,
  MessageField,
  BtnContainer,
  Button,
} from "./DetailStyles";

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
      <TelegramSender>Sender. {sender}</TelegramSender>

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
          <Button onClick={letModified}>수정 완료</Button>
        ) : (
          <Button onClick={setOnModifing}>수정</Button>
        )}
        {modify ? (
          <Button
            onClick={() => {
              setModify(false);
              setmodMessage(message);
            }}
          >
            취소
          </Button>
        ) : (
          <Button onClick={onDelete}>삭제</Button>
        )}
      </BtnContainer>
    </TelegramContainer>
  );
}

export default DetailBody;
