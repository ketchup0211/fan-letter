import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  TelegramContainer,
  TelegramSender,
  MessageViewField,
  BtnContainer,
  Button,
} from "./DetailStyles";
import MessageEditingField from "./MessageEditingField";
import getLocalData from "./modules/getLocalData";
import { toggleMod, modifyMessage } from "../redux/modules/DetailModReducer";
import { updateMessage } from "../redux/modules/DetailDataReducer";

//  DetailBody.jsx
function DetailBody() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modify = useSelector((state) => state.DetailModReducer.modify);
  const { id, message, receiver, sender } = useSelector(
    (state) => state.DetailDataReducer
  );
  const modMessage = useSelector((state) => state.DetailModReducer.message);

  const handleSetEditing = () => {
    dispatch(toggleMod());
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

    dispatch(toggleMod());
    navigate("/");
  };

  const handleCancelOrDelete = () => {
    if (modify) {
      dispatch(toggleMod());
      dispatch(updateMessage(message));
      dispatch(modifyMessage(message));
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
