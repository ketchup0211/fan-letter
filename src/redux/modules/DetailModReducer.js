//  Actions
const TOGGLE_MOD = "TOGGLE_MOD";
const INIT_MOD_MESSAGE = "INIT_MOD_MESSAGE";
const MODIFY_MESSAGE = "MODIFY_MESSAGE";

//  Action Creator
export const toggleMod = () => ({
  type: TOGGLE_MOD,
});

export const initModMessage = (message) => ({
  type: INIT_MOD_MESSAGE,
  payload: message,
});

export const modifyMessage = (message) => ({
  type: MODIFY_MESSAGE,
  payload: message,
});

//  Reducer
const initialState = {
  modify: false,
  message: "",
};

const DetailModReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOD:
      return {
        ...state,
        modify: !state.modify,
      };

    case INIT_MOD_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case MODIFY_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default DetailModReducer;
