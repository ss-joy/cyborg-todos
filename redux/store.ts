import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
//@ts-ignore
export const store = createStore(rootReducer, composeWithDevTools());
