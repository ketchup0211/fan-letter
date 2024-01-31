import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";

const TelegramContainer = styled.div`
  margin: 0px 31.5px 10px 31.5px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImg = styled.img`
  border-radius: 360px;
  margin: 20px;
  width: 100px;
  height: 100px;
`;

const ContentsContainer = styled.div`
  padding: 5px 20px 5px 5px;
  margin: 20px 0px;
  color: white;
  font-family: NEXON Lv2 Gothic;
  line-height: 23px;
  text-align: left;
  min-height: 90px;
`;

const Sender = styled.p`
  font-size: 20px;
`;

const Time = styled.p`
  font-size: 12px;
  color: grey;
`;
const Message = styled.p`
  margin-top: 5px;
  font-size: 16px;
`;
function TelegramBox({ sender, message, creationTime }) {
  return (
    <>
      <TelegramContainer>
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
