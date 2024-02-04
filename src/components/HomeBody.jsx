import { useState } from "react";
import TelegramForm from "./TelegramForm";
import TelegramList from "./TelegramList";
import HorizontalScrollBox from "./HorizontalScrollBox";
import { ReceiverContext, FormContext } from "../context/HomeContext";

function HomeBody() {
  const [receiver, setReceiver] = useState("침착맨");
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <ReceiverContext.Provider value={{ receiver, setReceiver }}>
      <HorizontalScrollBox />
      <FormContext.Provider
        value={{ message, setMessage, nickname, setNickname }}
      >
        <TelegramForm />
      </FormContext.Provider>
      <TelegramList />
    </ReceiverContext.Provider>
  );
}

export default HomeBody;
