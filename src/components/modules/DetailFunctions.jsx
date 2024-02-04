import getLocalData from "./getLocalData";
import goHome from "./goHome";

const setOnModifing = (setModify) => {
  setModify(true);
};

// Change Local Storage Data(Message)
const letModified = (params, modMessage, message) => {
  const parsedData = getLocalData(params.receiver);
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
  goHome();
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

      goHome();
    }
  }
};

export { modifyMessage, letModified, setOnModifing, onDelete };
