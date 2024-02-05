import { FormMessage } from "./HomeStyles";
import dynamicHeight from "./modules/dynamicHeight";
import { useSelector, useDispatch } from "react-redux";
import { configMessage } from "../redux/modules/MainDataReducer";

//  FormMessage.jsx
function Message() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.MainDataReducer.message);

  const onMessageChange = (event) => {
    dynamicHeight(event);
    dispatch(configMessage(event.target.value));
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
