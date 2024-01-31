import { cn } from "@/lib/cn";
import { UpdateTodoPriority } from "@/redux/todos/action-creators";
import { Todo } from "@/redux/todos/todoReducer";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

type TodoPriorityProps = { id: string; priority: Todo["priority"] };

function TodoPriority({ priority, id }: TodoPriorityProps) {
  const dispatch = useDispatch();
  function setPriority(id: string, priority: TodoPriorityProps["priority"]) {
    dispatch(UpdateTodoPriority(id, priority));
    toast.success("todo priority changed");
  }
  return (
    <p className="flex">
      <span
        onClick={() => {
          setPriority(id, "high");
        }}
        className={cn(
          "block p-1 px-1 font-bold text-center w-[100px] rounded text-red-700 hover:cursor-pointer hover:bg-gray-100 transition-all",
          {
            "bg-red-200": priority === "high",
          }
        )}
      >
        high
      </span>
      <span
        onClick={() => {
          setPriority(id, "low");
        }}
        className={cn(
          "block p-1 px-1 font-bold text-center w-[100px] rounded text-green-700 hover:cursor-pointer hover:bg-gray-100 transition-all",
          {
            "bg-green-200": priority === "low",
          }
        )}
      >
        low
      </span>
      <span
        onClick={() => {
          setPriority(id, "medium");
        }}
        className={cn(
          "block p-1 px-1 font-bold text-center w-[100px] rounded text-yellow-700 hover:cursor-pointer hover:bg-gray-100 transition-all",
          {
            "bg-yellow-200": priority === "medium",
          }
        )}
      >
        medium
      </span>
    </p>
  );
}

export default TodoPriority;
