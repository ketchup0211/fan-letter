import {
  TelegramContainer,
  TelegramSender,
  ModifyField,
  MessageField,
  BtnContainer,
  Button,
} from "./DetailStyles";

function DetailBody({ params, sender, message }) {
  const navigate = useNavigate();
  //  State for check modify-ing
  let [modify, setModify] = useState(false);
  //  State for message modify
  let [modMessage, setmodMessage] = useState(message);

  //  Modify-ing Message
  const modifyMessage = (e) => {
    setmodMessage(e.target.value);
  };
  const setOnModifing = () => {
    setModify(true);
  };

  // Change Local Storage Data(Message)
  const letModified = () => {
    if (modMessage !== message) {
      const updatedData = parsedData.map((item) =>
        item.id === params.id ? { ...item, message: modMessage } : item
      );
      localStorage.setItem(params.receiver, JSON.stringify(updatedData));
      alert("수정되었습니다.");
    } else {
      alert("아무런 수정사항이 없습니다.");
    }

    setModify(false);
    navigate("/");
  };

  //  Delete Messgae
  const onDelete = () => {
    let confirm = window.confirm(
      "삭제하시겠습니까? (삭제한 전보는 되돌릴 수 없습니다)"
    );
    if (confirm) {
      const data = localStorage.getItem(params.receiver);

      if (data) {
        const parsedData = JSON.parse(data);
        const updatedData = parsedData.filter((e) => e.id !== params.id);

        localStorage.setItem(params.receiver, JSON.stringify(updatedData));

        navigate("/");
      }
    }
  };
  return (
    <TelegramContainer>
      <TelegramSender>Sender. {sender}</TelegramSender>

      {modify ? (
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
      ) : (
        <MessageField>{message}</MessageField>
      )}

      <BtnContainer>
        {modify ? (
          <Button onClick={letModified}>수정 완료</Button>
        ) : (
          <Button onClick={setOnModifing}>수정</Button>
        )}
        {modify ? (
          <Button
            onClick={() => {
              setModify(false);
              setmodMessage(message);
            }}
          >
            취소
          </Button>
        ) : (
          <Button onClick={onDelete}>삭제</Button>
        )}
      </BtnContainer>
    </TelegramContainer>
  );
}

export default DetailBody;
