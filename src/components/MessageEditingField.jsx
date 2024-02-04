import { useContext } from "react";
import { ModifyField } from "./DetailStyles";
import { ModMessageContext } from "./DetailBody";

//  MessageEditingField.jsx
function MessageEditingField() {
  const { modMessage, setModMessage } = useContext(ModMessageContext);

  const handleModifyMessage = (e) => {
    setModMessage(e.target.value);
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
