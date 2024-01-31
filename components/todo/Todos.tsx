import { Todo as TodoType } from "@/redux/todos/todoReducer";
import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

function Todos() {
  //@ts-ignore
  const state = useSelector((state) => state.todos.todos as TodoType[]);

  return (
    <div className="">
      <h2 className="text-slate-600 font-bold p-2 text-2xl pb-2">
        List all your chores down here!
      </h2>
      <section id="todo-app" className="w-[500px]">
        <AddTodo />
        <ul>
          {state.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </section>
      <section className="text-slate-500 text-xl font-semibold text-center mt-2">
        Total :{state.length}
      </section>
    </div>
  );
}

export default Todos;
