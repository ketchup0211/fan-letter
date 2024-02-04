import { Telegrams, AlertMessage } from "./HomeStyles.jsx";
import "../fonts.css";
import TelegramBox from "./TelegramBox.jsx";
import getLocalData from "./modules/getLocalData.jsx";
import { useContext } from "react";
import { ReceiverContext } from "./HomeBody.jsx";

function TelegramList() {
  const { receiver } = useContext(ReceiverContext);
  const data = getLocalData(receiver);
  return (
    <>
      <Telegrams>
        {data.length > 0 ? (
          data.map(({ id, sender, message, creationTime }) => {
            return (
              <TelegramBox
                key={id}
                sender={sender}
                message={message}
                creationTime={creationTime}
                id={id}
                receiver={receiver}
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
