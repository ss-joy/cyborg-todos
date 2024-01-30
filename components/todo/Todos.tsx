import { Todos } from "@/redux/todos/todoReducer";
import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

function Todos() {
  //@ts-ignore
  const state = useSelector((state) => state.todos as Todos[]);
  console.log(state);
  return (
    <div>
      <h2 className="text-slate-600 font-bold">All your todos are here</h2>
      <section id="todo-app" className="w-[500px]">
        <AddTodo />
        <ul>
          {state.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default Todos;
