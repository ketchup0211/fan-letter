import { useNavigate } from "react-router-dom";
import { DataContext } from "../pages/Detail";
import { useState, useContext, createContext } from "react";
import {
  TelegramContainer,
  TelegramSender,
  MessageViewField,
  BtnContainer,
  Button,
} from "./DetailStyles";
import MessageEditingField from "./MessageEditingField";
import getLocalData from "./modules/getLocalData";

//  DetailBody.jsx
function DetailBody() {
  const { sender, receiver, message, id } = useContext(DataContext);
  const navigate = useNavigate();

  const [modify, setModify] = useState(false);
  const [modMessage, setModMessage] = useState(message);

  const handleSetEditing = () => {
    setModify(true);
  };

  const handleSetModified = () => {
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

  const handleCancelOrDelete = () => {
    if (modify) {
      setModify(false);
      setModMessage(message);
    } else {
      const confirmation = window.confirm(
        "삭제하시겠습니까? (삭제한 전보는 되돌릴 수 없습니다)"
      );

      if (confirmation) {
        const data = localStorage.getItem(receiver);

        try {
          const parsedData = JSON.parse(data);
          const updatedData = parsedData.filter((e) => e.id !== id);

          localStorage.setItem(receiver, JSON.stringify(updatedData));
          navigate("/");
        } catch (error) {
          console.error("Error parsing data from localStorage:", error);
        }
      }
    }
  };

  return (
    <TelegramContainer>
      <ModifyContext.Provider value={{ modify, setModify }}>
        <ModMessageContext.Provider value={{ modMessage, setModMessage }}>
          <TelegramSender>Sender. {sender}</TelegramSender>
          {modify ? (
            <MessageEditingField />
          ) : (
            <MessageViewField>{message}</MessageViewField>
          )}
          <BtnContainer>
            <Button onClick={modify ? handleSetModified : handleSetEditing}>
              {modify ? "수정 완료" : "수정"}
            </Button>
            <Button onClick={handleCancelOrDelete}>
              {modify ? "취소" : "삭제"}
            </Button>
          </BtnContainer>
        </ModMessageContext.Provider>
      </ModifyContext.Provider>
    </TelegramContainer>
  );
}

export default DetailBody;
export const ModifyContext = createContext();
export const ModMessageContext = createContext();
