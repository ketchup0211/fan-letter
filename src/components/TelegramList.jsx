import { useState } from "react";

import styled from "styled-components";
import "../fonts.css";
import TelegramBox from "./TelegramBox.jsx";
import getLocalData from "./getLocalData.jsx";

const Telegrams = styled.div`
  height: 500px;
  padding-top: 31.5px;
  border-top: 3px dashed black;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #f6ebe2;
  text-align: center;
`;

const AlertMessage = styled.div`
  color: black;
  font-size: 18px;
`;
function TelegramList({ about }) {
  const data = getLocalData(about);
  return (
    <>
      <Telegrams>
        {data ? (
          data.map((elements) => {
            return (
              <TelegramBox
                key={elements.id}
                sender={elements.sender}
                message={elements.message}
                creationTime={elements.creationTime}
                id={elements.id}
                receiver={about}
              ></TelegramBox>
            );
          })
        ) : (
          <AlertMessage>도착한 전보가 없습니다.</AlertMessage>
        )}
      </Telegrams>
    </>
  );
}

export default TelegramList;
