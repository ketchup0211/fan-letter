import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import { useNavigate, useParams } from "react-router-dom";
const MAIN_COLOR = "#f6ebe2";

const StBanner = styled.div`
  background-image: url("public/images/chim-ha-ha.png");
  text-align: center;
  padding: 60px;
  border-bottom: 3px dashed black;
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
  margin-top: 6px;
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
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
      <div>
        <div>
          <p>Sender. {sender}</p>
          {modify ? (
            <textarea
              type="text"
              name="message"
              maxLength={150}
              value={modMessage}
              onChange={modifyMessage}
              placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
              required
            />
          ) : (
            <p>{message}</p>
          )}
        </div>
        {modify ? (
          <button onClick={letModified}>수정 완료</button>
        ) : (
          <button onClick={() => setModify(true)}>수정</button>
        )}
        <button onClick={onDelete}>삭제</button>
      </div>
    </>
  );
}

export default Telegram;
