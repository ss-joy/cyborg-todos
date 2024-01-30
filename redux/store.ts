import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./todos/todoReducer";

export const store = createStore(todoReducer, composeWithDevTools());
