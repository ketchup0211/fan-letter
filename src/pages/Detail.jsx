import { useParams } from "react-router-dom";
import DetailHeader from "../components/DetailHeader";
import DetailBody from "../components/DetailBody";
import goHome from "../components/modules/goHome";
import getLocalData from "../components/modules/getLocalData";
/*
 *  Main Component
 */
function Detail() {
  const params = useParams();

  // Data Check
  const parsedData = getLocalData(params.receiver);
  const { sender, message } = parsedData.filter((e) => e.id === params.id)[0];

  //  Main
  return (
    <>
      <DetailHeader
        sender={sender}
        receiver={params.receiver}
        goHome={goHome}
      />
      <DetailBody params={params} sender={sender} message={message} />
    </>
  );
}

export default Detail;
