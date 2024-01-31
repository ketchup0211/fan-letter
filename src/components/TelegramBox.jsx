import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";

const TelegramContainer = styled.div`
  margin: 0px 31.5px 10px 31.5px;
  background-color: black;
  border-radius: 10px;
  height: 140px;
  display: flex;
`;

const ProfileImg = styled.img`
  border-radius: 360px;
  scale: 0.65;
`;

const ContentsContainer = styled.div`
  margin: 16px 0px;
  color: white;
  font-family: NEXON Lv2 Gothic;
  line-height: 20px;
  text-align: left;
`;
function TelegramBox({ sender, message, creationTime }) {
  return (
    <>
      <TelegramContainer>
        <ProfileImg src="/images/profile.jpg" alt="profile" />
        <ContentsContainer>
          <p>{sender}</p>
          <p>{creationTime}</p>
          <p>{message}</p>
        </ContentsContainer>
      </TelegramContainer>
    </>
  );
}

export default TelegramBox;
