import { Inter } from "next/font/google";
import MainHeader from "@/components/MainHeader";
import Todos from "@/components/todo/Todos";
import ChatBot from "@/components/chatbot/ChatBot";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <MainHeader />
      <main className="flex flex-col justify-between shadow-xl rounded-md shadow-slate-200 mx-auto w-[80%] p-10 mt-20 min-[1183px]:flex-row">
        <Todos />
        <ChatBot />
      </main>
      <Toaster richColors closeButton theme="light" position="top-right" />
    </div>
  );
}
