import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import { useNavigate, useParams } from "react-router-dom";
const MAIN_COLOR = "#f6ebe2";

const StBanner = styled.div`
  text-align: center;
  padding: 100px 30px 30px;
  margin-bottom: 10px;
`;

const GoHomeBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 30px;
  background-color: white;
  border: 2px solid black;
  border-radius: 180px;
  font-family: GangwonEduPowerExtraBoldA;
  font-size: 20px;
  padding: 10px;
`;

const StSubTitle = styled.p`
  font-family: NEXON Lv2 Gothic;
  font-size: 30px;
`;

const Sender = styled.p`
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
`;
const ModifyField = styled.textarea`
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  border: 2px solid black;
  height: 130px;
  width: 100%;
  resize: none;
  background-color: white;
  &:focus {
    outline-color: #f39009;
    &::placeholder {
      color: transparent;
    }
  }
  font-family: NEXON Lv2 Gothic;
`;

const MessageField = styled.p`
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  background-color: white;
  border: 2px solid black;
  max-width: 650px;
  font-family: NEXON Lv2 Gothic;
`;

const TelegramContainer = styled.div`
  padding: 20px;
  margin: 0px auto;
  width: 600px;
  background-color: #f6ebe2;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StButton = styled.button`
  display: inline;
  flex-basis: 45%;
  height: 35px;
  border: 2px solid black;
  font-family: NEXON Lv2 Gothic;
`;
function Telegram() {
  const params = useParams();
  const navigate = useNavigate();

  // id 값으로 데이터 조회
  const data = localStorage.getItem(params.receiver);
  const parsedData = JSON.parse(data);
  const { sender, message, creationTime } = parsedData.filter(
    (e) => e.id === params.id
  )[0];

  const onDelete = () => {
    let confirm = window.confirm(
      "삭제하시겠습니까? (삭제한 전보는 되돌릴 수 없습니다)"
    );
    if (confirm) {
      const data = localStorage.getItem(params.receiver);

      if (data) {
        const parsedData = JSON.parse(data);
        const updatedData = parsedData.filter((e) => e.id !== params.id);

        localStorage.setItem(params.receiver, JSON.stringify(updatedData));

        navigate("/");
      }
    }
  };

  const modifyMessage = (e) => {
    setmodMessage(e.target.value);
  };

  const letModified = () => {
    if (modMessage != message) {
      const updatedData = parsedData.map((item) =>
        item.id === params.id ? { ...item, message: modMessage } : item
      );
      localStorage.setItem(params.receiver, JSON.stringify(updatedData));
      alert("수정되었습니다.");
    } else {
      alert("아무런 수정사항이 없습니다.");
    }

    setModify(false);
    navigate("/");
  };

  let [modify, setModify] = useState(false);
  let [modMessage, setmodMessage] = useState(message);
  return (
    <>
      <StBanner>
        <GoHomeBtn onClick={() => navigate("/")}>홈으로</GoHomeBtn>
        <StSubTitle>
          {sender} 님이 {params.receiver} 님에게 보낸 전보
        </StSubTitle>
      </StBanner>
      <TelegramContainer>
        <Sender>Sender. {sender}</Sender>
        {modify ? (
          <ModifyField
            //onClick={dynamicHeight}
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
            <StButton onClick={letModified}>수정 완료</StButton>
          ) : (
            <StButton onClick={() => setModify(true)}>수정</StButton>
          )}
          {modify ? (
            <StButton onClick={() => setModify(false)}>취소</StButton>
          ) : (
            <StButton onClick={onDelete}>삭제</StButton>
          )}
        </BtnContainer>
      </TelegramContainer>
    </>
  );
}

export default Telegram;
