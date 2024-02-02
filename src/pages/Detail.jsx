import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import { useNavigate, useParams } from "react-router-dom";
const MAIN_COLOR = "#f6ebe2";
import DetailHeader from "../components/DetailHeader";
import DetailBody from "../components/DetailBody";
/*
 *  Main Component
 */
function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  // Data Check
  const data = localStorage.getItem(params.receiver);
  const parsedData = JSON.parse(data);
  const { sender, message, creationTime } = parsedData.filter(
    (e) => e.id === params.id
  )[0];

  //  State for check modify-ing
  let [modify, setModify] = useState(false);
  //  State for message modify
  let [modMessage, setmodMessage] = useState(message);

  //  Delete Messgae
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

  //  Modify-ing Message
  const modifyMessage = (e) => {
    setmodMessage(e.target.value);
  };

  const setOnModifing = () => {
    setModify(true);
  };
  // Change Local Storage Data(Message)
  const letModified = () => {
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
    navigate("/");
  };

  const goHome = () => {
    navigate("/");
  };
  //  Main
  return (
    <>
      <DetailHeader
        sender={sender}
        receiver={params.receiver}
        goHome={goHome}
      />
      <DetailBody
        sender={sender}
        modify={modify}
        setModify={setModify}
        message={message}
        modMessage={modMessage}
        setmodMessage={setmodMessage}
        modifyMessage={modifyMessage}
        letModified={letModified}
        setOnModifing={setOnModifing}
        onDelete={onDelete}
      />
    </>
  );
}

export default Detail;
