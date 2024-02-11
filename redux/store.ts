import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

//TODO:
//add proper type checking
//@ts-ignore
export const store = createStore(rootReducer, composeWithDevTools());
