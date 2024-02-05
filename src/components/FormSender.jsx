import { useSelector, useDispatch } from "react-redux";
import { FormSender } from "./HomeStyles";
import { configSender } from "../redux/modules/MainDataReducer";

//  FormSender.jsx
function Sender() {
  const dispatch = useDispatch();
  const sender = useSelector((state) => state.MainDataReducer.sender);

  const onSenderChange = (event) => {
    dispatch(configSender(event.target.value));
  };

  return (
    <FormSender>
      From.{" "}
      <input
        type="text"
        name="nickname"
        placeholder="닉네임(최대 10자)"
        autoComplete="off"
        onChange={onSenderChange}
        maxLength={10}
        value={sender}
        required
      ></input>
    </FormSender>
  );
}
export default Sender;
