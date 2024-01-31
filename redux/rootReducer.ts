import { combineReducers } from "redux";
import { todoReducer } from "./todos/todoReducer";
import { notificationReduer } from "./notifications/notification-reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  notifications: notificationReduer,
});
