import React from "react";
import { Textarea } from "../ui/textarea";
import { BotIcon } from "lucide-react";

function ChatBot() {
  return (
    <div className="mt-16 m-0 p-2 relative w-[100%] min-[1183px]:mt-0 min-[1183px]:w-[40%]">
      <h2 className="text-slate-600 text-3xl font-bold mb-3">
        Feeling lazy? Let our AI do it for you !!
      </h2>
      <Textarea
        className="w-[100%] h-[200px] border-2 border-slate-400 text-lg"
        placeholder="give commands here"
      />
      <BotIcon className="absolute top-[200px] right-7 scale-150 animate-bounce min-[1183px]:top-[220px] min-[1472px]:top-[200px]" />
    </div>
  );
}

export default ChatBot;
