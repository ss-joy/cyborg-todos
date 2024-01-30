import { ADD, UPDATETODOPRIORITY, UPDTAESTATUS } from "./action-identiers";
import { v4 } from "uuid";
export type Todos = {
  id: string;
  text: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "completed";
};
type initialStateType = {
  todos: Todos[];
};
const initialState: initialStateType = {
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
export function todoReducer(state: initialStateType = initialState, action) {
  switch (action.type) {
    case UPDTAESTATUS:
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
      const createdTodo: Todos = {
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
    case UPDATETODOPRIORITY:
      console.log(action.payload);
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
      // console.log("ups", updatedTodoss);
      return {
        ...state,
        todos: updatedTodoss,
      };

    default:
      return state;
  }
}
