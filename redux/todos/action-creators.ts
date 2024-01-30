import {
  ADD,
  DELETE,
  UPDATECONTENT,
  UPDATETODOPRIORITY,
  UPDTAESTATUS,
} from "./action-identiers";

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
    type: UPDTAESTATUS,
    payload: id,
  };
}

export function UpdateContent(newContent: string) {
  return {
    type: UPDATECONTENT,
    payload: newContent,
  };
}

export function UpdateTodoPriority(
  id: string,
  priority: "high" | "medium" | "low"
) {
  return {
    type: UPDATETODOPRIORITY,
    payload: {
      id,
      priority,
    },
  };
}
