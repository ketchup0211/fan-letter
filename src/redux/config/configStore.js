import { createStore } from "redux";
import { combineReducers } from "redux";
import DetailDataReducer from "../modules/DetailDataReducer";
import DetailModReducer from "../modules/DetailModReducer";

const rootReducer = combineReducers({
  DetailDataReducer: DetailDataReducer,
  DetailModReducer: DetailModReducer,
});

const store = createStore(rootReducer);

export default store;
