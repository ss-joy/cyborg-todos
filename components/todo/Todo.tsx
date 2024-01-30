import { cn } from "@/lib/cn";
import { UpdateTodoStatus } from "@/redux/todos/action-creators";
import { Todos } from "@/redux/todos/todoReducer";
import { CheckCircle2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import TodoPriority from "./TodoPriority";
type TodoType = {
  todo: Todos;
};
export default function Todo({
  todo: { id, priority, status, text },
}: TodoType): JSX.Element {
  const dispatch = useDispatch();
  const updateTodoStatus = (id: string) => {
    dispatch(UpdateTodoStatus(id));
  };
  return (
    <li className="flex items-center shadow-md rounded-md my-4 p-2 border-2 border-slate-400">
      <div>
        <CheckCircle2
          onClick={() => {
            updateTodoStatus(id);
          }}
          stroke="#2bf20c"
          className={cn("mr-10 scale-150 transition-all hover:scale-110", {
            "text-white fill-green-500 stroke-white": status === "completed",
            "text-white fill-white stroke-green-500": status === "pending",
          })}
        />
      </div>
      <div>
        {status === "completed" ? (
          <p className="text-xl text-slate-600">
            <del>{text}</del>
          </p>
        ) : null}

        {status === "pending" ? (
          <p className="text-xl text-slate-600">{text}</p>
        ) : null}

        {/* <p
          className={cn("rounded p-1 font-bold text-center w-[100px]", {
            "bg-red-200 text-red-700": priority === "high",
            "bg-green-200 text-green-700": priority === "low",
            "bg-orange-200 text-orange-700": priority === "medium",
          })}
        >
          {priority}
        </p> */}
        <TodoPriority priority={priority} id={id} />
      </div>
    </li>
  );
}
