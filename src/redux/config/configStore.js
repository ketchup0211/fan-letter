import { createStore } from "redux";
import { combineReducers } from "redux";
import detailReducer from "../modules/detailReducer";

const rootReducer = combineReducers({
  detailReducer: detailReducer,
});
const store = createStore(rootReducer);

export default store;
