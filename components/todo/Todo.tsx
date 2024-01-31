import { cn } from "@/lib/cn";
import { DeleteTodo, UpdateTodoStatus } from "@/redux/todos/action-creators";
import { Todo } from "@/redux/todos/todoReducer";
import { CheckCircle2, PenIcon, TrashIcon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import TodoPriority from "./TodoPriority";
import EditTodoModal from "./EditTodoModal";
type TodoType = {
  todo: Todo;
};
export default function Todo({
  todo: { id, priority, status, text },
}: TodoType): JSX.Element {
  const dispatch = useDispatch();
  const updateTodoStatus = (id: string) => {
    dispatch(UpdateTodoStatus(id));
  };
  const handleDelete = (id: string) => {
    dispatch(DeleteTodo(id));
  };
  return (
    <li className="flex items-center relative shadow-md rounded-md my-4 p-2 border-2 border-slate-400">
      <section id="check-box" className="flex justify-center items-center">
        <CheckCircle2
          onClick={() => {
            updateTodoStatus(id);
          }}
          stroke="#2bf20c"
          className={cn("scale-150 transition-all hover:scale-110", {
            "text-white fill-green-500 stroke-white": status === "completed",
            "text-white fill-white stroke-green-500": status === "pending",
          })}
        />
        <EditTodoModal id={id} />
      </section>
      <section id="main-container">
        {status === "completed" ? (
          <p className="text-xl text-slate-600 w-[70%] max-w-[700px] break-words">
            <del>{text}</del>
          </p>
        ) : null}

        {status === "pending" ? (
          <p className="text-xl text-slate-600 w-[70%] max-w-[700px] break-words">
            {text}
          </p>
        ) : null}

        <TodoPriority priority={priority} id={id} />
      </section>
      <section
        onClick={() => {
          handleDelete(id);
        }}
        className="flex justify-center absolute top-[20px] right-4 items-center ml-auto hover:border-2 rounded-full w-[40px] h-[40px] hover:bg-red-200"
      >
        <TrashIcon className="stroke-red-500 hover:rounded-full" />
      </section>
    </li>
  );
}
