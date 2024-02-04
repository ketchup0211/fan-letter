import { ModifyField } from "./DetailStyles";

function ModifyContainer({ modifyMessage, modMessage }) {
  return (
    <ModifyField
      type="text"
      name="message"
      maxLength={150}
      value={modMessage}
      onChange={modifyMessage}
      placeholder="최대 150자(공백 포함) 까지만 작성 가능합니다."
      autoFocus
      required
    />
  );
}

export default ModifyContainer;
