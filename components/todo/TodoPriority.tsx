import { cn } from "@/lib/cn";
import { UpdateTodoPriority } from "@/redux/todos/action-creators";
import React from "react";
import { useDispatch } from "react-redux";
type TodoPriorityProps = { id: string; priority: "high" | "medium" | "low" };
function TodoPriority({ priority, id }: TodoPriorityProps) {
  const dispatch = useDispatch();
  function setPriorityHigh() {
    dispatch(UpdateTodoPriority(id, "high"));
  }
  function setPriorityLow() {
    dispatch(UpdateTodoPriority(id, "low"));
  }
  function setPriorityMedium() {
    dispatch(UpdateTodoPriority(id, "medium"));
  }
  return (
    <p className="flex">
      <span
        onClick={setPriorityHigh}
        className={cn(
          "block p-1 px-1 font-bold text-center w-[100px] rounded text-red-700 hover:cursor-pointer",
          {
            "bg-red-200": priority === "high",
          }
        )}
      >
        high
      </span>
      <span
        onClick={setPriorityLow}
        className={cn(
          "block p-1 px-1 font-bold text-center w-[100px] rounded text-green-700 hover:cursor-pointer ",
          {
            "bg-green-200": priority === "low",
          }
        )}
      >
        low
      </span>
      <span
        onClick={setPriorityMedium}
        className={cn(
          "block p-1 px-1 font-bold text-center w-[100px] rounded text-yellow-700 hover:cursor-pointer",
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
