import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModify, updateModMessage } from "../redux/modules/detailReducer";
import { useContext } from "react";
import { DataContext } from "../context/DetailContext";
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
  const { sender, receiver, id, message } = useContext(DataContext);
  const dispatch = useDispatch();
  const modify = useSelector((state) => state.detailReducer.modify);
  const modMessage = useSelector((state) => state.detailReducer.modMessage);

  const navigate = useNavigate();

  const handleSetEditing = () => {
    dispatch(toggleModify());
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

    dispatch(toggleModify());
    navigate("/");
  };

  const handleCancelOrDelete = () => {
    if (modify) {
      dispatch(toggleModify());
      dispatch(updateModMessage(message));
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
    </TelegramContainer>
  );
}

export default DetailBody;
