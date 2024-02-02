import { useState } from "react";
import { Telegrams, AlertMessage } from "./HomeStyles.jsx";
import "../fonts.css";
import TelegramBox from "./TelegramBox.jsx";
import getLocalData from "./modules/getLocalData.jsx";

function TelegramList({ about }) {
  const data = getLocalData(about);
  return (
    <>
      <Telegrams>
        {data.length > 0 ? (
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
