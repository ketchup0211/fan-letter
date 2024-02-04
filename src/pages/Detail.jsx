import { useParams } from "react-router-dom";
import { createContext } from "react";
import DetailHeader from "../components/DetailHeader";
import DetailBody from "../components/DetailBody";
import getLocalData from "../components/modules/getLocalData";

export const DataContext = createContext();
function Detail() {
  const params = useParams();

  // Data Check
  const parsedData = getLocalData(params.receiver);
  const { sender, message } = parsedData.filter((e) => e.id === params.id)[0];
  let value = {
    sender: sender,
    receiver: params.receiver,
    message: message,
    id: params.id,
  };
  //  Main
  return (
    <DataContext.Provider value={value}>
      <DetailHeader />
      <DetailBody params={params} sender={sender} message={message} />
    </DataContext.Provider>
  );
}

export default Detail;
