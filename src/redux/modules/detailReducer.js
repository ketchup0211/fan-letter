//  Actions
const TOGGLE_MODIFY = "TOGGLE_MODIFY";
const UPDATE_MOD_MESSAGE = "UPDATE_MOD_MESSAGE";

//  Action Creator
export const toggleModify = () => ({
  type: TOGGLE_MODIFY,
});

export const updateModMessage = (message) => ({
  type: UPDATE_MOD_MESSAGE,
  payload: message,
});

//  Reducer
const initialState = {
  modify: false,
  modMessage: "",
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODIFY:
      return {
        ...state,
        modify: !state.modify,
      };
    case UPDATE_MOD_MESSAGE:
      return {
        ...state,
        modMessage: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
