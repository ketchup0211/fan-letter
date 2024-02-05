//  Actions
const INIT_SENDER = "INIT_SENDER";
const INIT_RECEIVER = "INIT_RECEIVER";
const INIT_MESSAGE = "INIT_MESSAGE";
const INIT_ID = "INIT_ID";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

//  Action Creator
export const initSender = (sender) => ({
  type: INIT_SENDER,
  payload: sender,
});
export const initReceiver = (receiver) => ({
  type: INIT_RECEIVER,
  payload: receiver,
});
export const initMessage = (message) => ({
  type: INIT_MESSAGE,
  payload: message,
});
export const initID = (id) => ({
  type: INIT_ID,
  payload: id,
});
export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  payload: message,
});

//  Reducer
const initialState = {
  sender: "",
  receiver: "",
  message: "",
  id: "",
};

const DetailDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SENDER:
      return {
        ...state,
        sender: action.payload,
      };
    case INIT_RECEIVER:
      return {
        ...state,
        receiver: action.payload,
      };
    case INIT_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case INIT_ID:
      return {
        ...state,
        id: action.payload,
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default DetailDataReducer;
