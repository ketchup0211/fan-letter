import { DetailBanner, GoHomeBtn, Title } from "./DetailStyles";
import "../fonts.css";

function DetailHeader({ sender, receiver, goHome }) {
  return (
    <DetailBanner>
      <GoHomeBtn onClick={goHome}>홈으로</GoHomeBtn>
      <Title>
        {sender} 님이 {receiver} 님에게 보낸 전보
      </Title>
    </DetailBanner>
  );
}

export default DetailHeader;
