import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { NotebookPenIcon, PlusCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { Add } from "@/redux/todos/action-creators";
import { toast } from "sonner";
function AddTodo() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }
  function handleSubmitTodo() {
    if (text !== "") {
      dispatch(Add(text));
      setText("");
      toast.success("Todo added!");
    }
  }
  return (
    <div className="relative">
      <NotebookPenIcon className="text-slate-600 absolute top-[18px] left-4" />
      <PlusCircle
        onClick={handleSubmitTodo}
        className="scale-125 text-slate-600 absolute top-[18px] right-4 hover:fill-slate-500 hover:text-white hover:scale-125 transition-all hover:cursor-pointer"
      />
      <Textarea
        onChange={handleChange}
        value={text}
        placeholder="enter your todo here"
        className="pl-12 py-4 pr-6"
      />
    </div>
  );
}

export default AddTodo;
