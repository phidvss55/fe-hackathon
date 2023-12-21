import { combineReducers } from "redux";
import { appReducer } from "./app";
import { courseReducer } from "./courses";

export const rootReducer = combineReducers({
  app: appReducer,
  course: courseReducer,
});
