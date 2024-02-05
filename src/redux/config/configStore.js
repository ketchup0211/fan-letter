import { createStore } from "redux";
import { combineReducers } from "redux";
import DetailDataReducer from "../modules/DetailDataReducer";
import DetailModReducer from "../modules/DetailModReducer";
import MainDataReducer from "../modules/MainDataReducer";

const rootReducer = combineReducers({
  DetailDataReducer: DetailDataReducer,
  DetailModReducer: DetailModReducer,
  MainDataReducer: MainDataReducer,
});

const store = createStore(rootReducer);

export default store;
