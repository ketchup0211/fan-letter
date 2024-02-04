import { DetailBanner, GoHomeBtn, Title } from "./DetailStyles";
import "../fonts.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../pages/Detail";

function DetailHeader() {
  const { sender, receiver } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <DetailBanner>
      <GoHomeBtn onClick={() => navigate("/")}>홈으로</GoHomeBtn>
      <Title>
        {sender} 님이 {receiver} 님에게 보낸 전보
      </Title>
    </DetailBanner>
  );
}

export default DetailHeader;
