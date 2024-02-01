import React, { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { BotIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../ui/custom/Loading";
import { useDispatch } from "react-redux";
import { replaceTodos } from "@/redux/todos/action-creators";

function ChatBot() {
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  //@ts-ignore
  const state = useSelector((state) => state.todos);
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPrompt(e.target.value);
  }

  function handleSubmit() {
    async function getApiResponse() {
      setLoading(true);
      try {
        const response = await axios.post("/api/chat", {
          threadId: "11eec0e4-98b4-db50-975f-a5a3bc9c793f",
          input: prompt,
          todos: state.todos,
          workspaceKey: "11eebe97-62d5-28e0-aa1f-43eb6160fccd",
        });
        const changedData = response.data.data.replace(
          /^```json\n([\s\S]*)\n```$/,
          "$1"
        );
        console.log(JSON.parse(changedData).todos);
        dispatch(replaceTodos(JSON.parse(changedData).todos));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getApiResponse();
  }
  return (
    <div className="mt-16 m-0 p-2 relative w-[100%] min-[1183px]:mt-0 min-[1183px]:w-[40%]">
      <h2 className="text-slate-600 text-3xl font-bold mb-3">
        Feeling lazy? Let our AI do it for you !!
      </h2>
      <Textarea
        onChange={handleChange}
        value={prompt}
        className="w-[100%] h-[200px] border-2 border-slate-400 text-lg"
        placeholder="give commands here"
      />
      <Button
        onClick={handleSubmit}
        className="mt-2 bg-violet-500 font-bold block ml-auto hover:bg-violet-800 text-lg"
      >
        {loading ? <Loading /> : "Submit!"}
      </Button>
      <BotIcon className="absolute top-[200px] right-7 scale-150 animate-bounce min-[1183px]:top-[220px] min-[1472px]:top-[200px]" />
    </div>
  );
}

export default ChatBot;
