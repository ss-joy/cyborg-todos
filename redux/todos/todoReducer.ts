import {
  ADD,
  DELETE,
  REPLACE_TODOS,
  UPDATE_CONTENT,
  UPDATE_TODO_PRIORITY,
  UPDTAE_STATUS,
} from "./action-identiers";
import { v4 } from "uuid";
export type Todo = {
  id: string;
  text: string;
  priority: "high" | "medium" | "low" | "";
  status: "pending" | "completed";
};
type StateType = {
  todos: Todo[];
};
const initialState: StateType = {
  todos: [
    {
      id: "e50747e1-7129-49e4-8d84-2208892b31e0",
      text: "Eat a lot of burgers.",
      priority: "",
      status: "completed",
    },
    {
      id: "f6500b01-dd3d-4b3d-bd07-9ec3a54cd522",
      text: "Call mom at 9 am",
      priority: "",
      status: "pending",
    },
    {
      id: "df3f48d2-f12f-4bde-a1ce-c2a3ff66f7dd",
      text: "Do my homework before evening",
      priority: "",
      status: "pending",
    },
  ],
};
//@ts-ignore
export function todoReducer(state: StateType = initialState, action) {
  switch (action.type) {
    case UPDTAE_STATUS:
      const newTodos = state.todos.map((todo) => {
        if (action.payload !== todo.id) {
          return { ...todo };
        } else if (action.payload === todo.id) {
          return {
            ...todo,
            status: todo.status === "pending" ? "completed" : "pending",
          };
        }
      });
      return { ...state, todos: newTodos };

    case ADD:
      const createdTodo: Todo = {
        id: v4(),
        priority: "medium",
        status: "pending",
        text: action.payload,
      };
      const updatedTodos = state.todos.map((todo) => {
        return { ...todo };
      });
      updatedTodos.push(createdTodo);
      return {
        ...state,
        todos: updatedTodos,
      };
    case UPDATE_TODO_PRIORITY:
      const updatedTodoss = state.todos.map((todo) => {
        if (action.payload.id !== todo.id) {
          return { ...todo };
        } else if (action.payload.id === todo.id) {
          return {
            ...todo,
            priority:
              action.payload.priority === todo.priority
                ? ""
                : action.payload.priority,
          };
        }
      });
      return {
        ...state,
        todos: updatedTodoss,
      };
    case DELETE:
      const newTodosss = state.todos.filter((todo) => {
        return action.payload !== todo.id;
      });
      return {
        ...state,
        todos: newTodosss,
      };
    case UPDATE_CONTENT:
      const updatedTodossss = state.todos.map((todo) => {
        if (action.payload.id !== todo.id) {
          return { ...todo };
        } else if (action.payload.id === todo.id) {
          return { ...todo, text: action.payload.newContent };
        }
      });
      return {
        ...state,
        todos: updatedTodossss,
      };
    case REPLACE_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}
function addTodo() {}
