import { useNavigate } from "react-router-dom";
import {
  TelegramContainer,
  ProfileImg,
  ContentsContainer,
  Sender,
  Time,
  Message,
} from "./HomeStyles.jsx";

//  TelegramBox.jsx
function TelegramBox({ sender, receiver, message, creationTime, id }) {
  const navigate = useNavigate();

  return (
    <>
      <TelegramContainer onClick={() => navigate(`detail/${receiver}/${id}`)}>
        <ProfileImg src="/images/profile.jpg" alt="profile" />
        <ContentsContainer>
          <Sender>{sender}</Sender>
          <Time>{creationTime}</Time>
          <Message>{message}</Message>
        </ContentsContainer>
      </TelegramContainer>
    </>
  );
}

export default TelegramBox;
