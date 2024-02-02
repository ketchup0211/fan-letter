import { useState } from "react";
import TelegramForm from "./TelegramForm";
import TelegramList from "./TelegramList";
import HorizontalScrollBox from "./HorizontalScrollBox";

function HomeBody() {
  const [receiver, setReceiver] = useState();
  return (
    <>
      <HorizontalScrollBox setReceiver={setReceiver} receiver={receiver} />
      <TelegramForm receiver={receiver} />
      <TelegramList about={receiver} />
    </>
  );
}

export default HomeBody;
