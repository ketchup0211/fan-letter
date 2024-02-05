import { useSelector, useDispatch } from "react-redux";
import TelegramBox from "./TelegramBox.jsx";
import getLocalData from "./modules/getLocalData.jsx";

//  TelegramBox.jsx
function TelegramBoxes() {
  const dispatch = useDispatch();
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
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
