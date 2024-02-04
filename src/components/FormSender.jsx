import { useContext } from "react";
import { FormSender } from "./HomeStyles";
import { FormContext } from "../context/HomeContext";

//  FormSender.jsx
function Sender() {
  const { nickname, setNickname } = useContext(FormContext);

  const onNicknameChange = (event) => {
    setNickname(event.target.value);
  };
  return (
    <FormSender>
      From.{" "}
      <input
        type="text"
        name="nickname"
        placeholder="닉네임(최대 10자)"
        autoComplete="off"
        onChange={onNicknameChange}
        maxLength={10}
        value={nickname}
        required
      ></input>
    </FormSender>
  );
}
export default Sender;
