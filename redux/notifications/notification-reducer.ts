import { ADD, DELETE, EDITED, PRIO_CHANGE } from "./action-identifiers";

type StateType = {
  message:
    | "New Todo added!"
    | "Just deleted a Todo"
    | "Priority changed"
    | "Edited done"
    | "";
};
const initialState: StateType = {
  message: "",
};
//@ts-ignore
export function notificationReduer(state: StateType = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        message: "New Todo added!",
      };

    case DELETE:
      return {
        ...state,
        message: "Just deleted a Todo",
      };

    case PRIO_CHANGE:
      return {
        ...state,
        message: "Priority changed",
      };
    case EDITED:
      return {
        ...state,
        message: "Edited done",
      };
    default:
      return state;
  }
}
