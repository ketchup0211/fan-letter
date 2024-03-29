import { useSelector } from "react-redux";
import { Telegrams, AlertMessage } from "./HomeStyles.jsx";
import TelegramBoxes from "./TelegramBoxes.jsx";
import getLocalData from "./modules/getLocalData.jsx";

function TelegramList() {
  const receiver = useSelector((state) => state.MainDataReducer.receiver);
  const data = getLocalData(receiver);

  return (
    <Telegrams>
      {data.length > 0 ? (
        <TelegramBoxes />
      ) : (
        <AlertMessage>도착한 전보가 없습니다.</AlertMessage>
      )}
    </Telegrams>
  );
}

export default TelegramList;
