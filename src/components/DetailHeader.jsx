import { DetailBanner, GoHomeBtn, Title } from "./DetailStyles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//  DetailHeader.jsx
function DetailHeader() {
  const navigate = useNavigate();
  const { sender, receiver } = useSelector((state) => state.DetailDataReducer);
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
