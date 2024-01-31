import {
  ADD,
  DELETE,
  UPDATE_CONTENT,
  UPDATE_TODO_PRIORITY,
  UPDTAE_STATUS,
} from "./action-identiers";
import { Todo } from "./todoReducer";

export function Add(text: string) {
  return {
    type: ADD,
    payload: text,
  };
}

export function DeleteTodo(todoId: string) {
  return {
    type: DELETE,
    payload: todoId,
  };
}
export function UpdateTodoStatus(id: string) {
  return {
    type: UPDTAE_STATUS,
    payload: id,
  };
}

export function UpdateContent(id: string, newContent: string) {
  return {
    type: UPDATE_CONTENT,
    payload: {
      id,
      newContent,
    },
  };
}

export function UpdateTodoPriority(id: string, priority: Todo["priority"]) {
  return {
    type: UPDATE_TODO_PRIORITY,
    payload: {
      id,
      priority,
    },
  };
}
