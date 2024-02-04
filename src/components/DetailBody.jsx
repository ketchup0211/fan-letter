import {
  TelegramContainer,
  TelegramSender,
  MessageField,
  BtnContainer,
  Button,
} from "./DetailStyles";
import { useState, useContext } from "react";
import ModifyContainer from "./ModifyContainer";
import getLocalData from "./modules/getLocalData";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../pages/Detail";

function DetailBody() {
  const { sender, receiver, message, id } = useContext(DataContext);
  const navigate = useNavigate();
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
  const setModified = () => {
    const parsedData = getLocalData(receiver);
    if (modMessage !== message) {
      const updatedData = parsedData.map((item) =>
        item.id === id ? { ...item, message: modMessage } : item
      );
      localStorage.setItem(receiver, JSON.stringify(updatedData));
      alert("수정되었습니다.");
    } else {
      alert("아무런 수정사항이 없습니다.");
    }

    setModify(false);
    navigate("/");
  };
  const onDelete = () => {
    let confirm = window.confirm(
      "삭제하시겠습니까? (삭제한 전보는 되돌릴 수 없습니다)"
    );
    if (confirm) {
      const data = localStorage.getItem(receiver);

      if (data) {
        const parsedData = JSON.parse(data);
        const updatedData = parsedData.filter((e) => e.id !== id);

        localStorage.setItem(receiver, JSON.stringify(updatedData));

        navigate("/");
      }
    }
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
        <Button onClick={modify ? setModified : setEditing}>
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
