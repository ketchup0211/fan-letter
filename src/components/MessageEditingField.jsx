import { useDispatch, useSelector } from "react-redux";
import { ModifyField } from "./DetailStyles";
import { modifyMessage } from "../redux/modules/DetailModReducer";

//  MessageEditingField.jsx
function MessageEditingField() {
  const dispatch = useDispatch();
  const modMessage = useSelector((state) => state.DetailModReducer.message);

  const handleModifyMessage = (e) => {
    dispatch(modifyMessage(e.target.value));
  };
  return (
    <ModifyField
      type="text"
      name="message"
      maxLength={150}
      value={modMessage}
      onChange={handleModifyMessage}
      placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
      autoFocus
      required
    />
  );
}

export default MessageEditingField;
