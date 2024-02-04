import { useContext } from "react";
import { ReceiverContext } from "../context/HomeContext.jsx";
import TelegramBox from "./TelegramBox.jsx";
import getLocalData from "./modules/getLocalData.jsx";

//  TelegramBox.jsx
function TelegramBoxes() {
  const { receiver } = useContext(ReceiverContext);
  const data = getLocalData(receiver);
  return (
    <>
      {data.map(({ id, sender, message, creationTime }) => {
        return (
          <TelegramBox
            key={id}
            sender={sender}
            receiver={receiver}
            message={message}
            creationTime={creationTime}
            id={id}
          ></TelegramBox>
        );
      })}
    </>
  );
}

export default TelegramBoxes;
