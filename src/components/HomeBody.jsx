import { createContext, useState } from "react";
import TelegramForm from "./TelegramForm";
import TelegramList from "./TelegramList";
import HorizontalScrollBox from "./HorizontalScrollBox";

export const ReceiverContext = createContext();

function HomeBody() {
  const [receiver, setReceiver] = useState("침착맨");

  return (
    <ReceiverContext.Provider value={{ receiver, setReceiver }}>
      <HorizontalScrollBox />
      <TelegramForm />
      <TelegramList />
    </ReceiverContext.Provider>
  );
}

export default HomeBody;
