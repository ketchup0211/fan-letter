//  Actions
const CONFIG_SENDER = "CONFIG_SENDER";
const CONFIG_RECEIVER = "CONFIG_RECEIVER";
const CONFIG_MESSAGE = "CONFIG_MESSAGE";

//  Action Creator
export const configSender = (sender) => ({
  type: CONFIG_SENDER,
  payload: sender,
});
export const configReceiver = (receiver) => ({
  type: CONFIG_RECEIVER,
  payload: receiver,
});
export const configMessage = (message) => ({
  type: CONFIG_MESSAGE,
  payload: message,
});

//  Reducer
const initialState = {
  sender: "",
  receiver: "침착맨",
  message: "",
};

const MainDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_SENDER:
      return {
        ...state,
        sender: action.payload,
      };
    case CONFIG_RECEIVER:
      return {
        ...state,
        receiver: action.payload,
      };
    case CONFIG_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default MainDataReducer;
