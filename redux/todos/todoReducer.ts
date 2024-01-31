import {
  ADD,
  DELETE,
  UPDATE_CONTENT,
  UPDATE_TODO_PRIORITY,
  UPDTAE_STATUS,
} from "./action-identiers";
import { v4 } from "uuid";
export type Todo = {
  id: string;
  text: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "completed";
};
type StateType = {
  todos: Todo[];
};
const initialState: StateType = {
  todos: [
    {
      id: "asdasdasdasdadsaodas8ds",
      text: "sdsdd",
      priority: "high",
      status: "completed",
    },
    {
      id: "asdasudp8ausd80asd",
      text: "sdasijdsahduhusahudhsd",
      priority: "low",
      status: "pending",
    },
    {
      id: "asdasudp8ausd80asd3243",
      text: "yoyoyoyo",
      priority: "medium",
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
            priority: action.payload.priority,
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
    default:
      return state;
  }
}
