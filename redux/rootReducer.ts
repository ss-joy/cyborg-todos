import { combineReducers } from "redux";
import { todoReducer } from "./todos/todoReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
});
