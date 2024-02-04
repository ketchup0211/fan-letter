import { FormContext } from "../context/HomeContext";
import { useContext } from "react";
import { FormMessage } from "./HomeStyles";
import dynamicHeight from "./modules/dynamicHeight";

//  FormMessage.jsx
function Message() {
  const { message, setMessage } = useContext(FormContext);
  const onMessageChange = (event) => {
    dynamicHeight(event);
    setMessage(event.target.value);
  };
  return (
    <FormMessage
      type="text"
      name="message"
      placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
      onChange={onMessageChange}
      maxLength={150}
      value={message}
      required
    />
  );
}

export default Message;
