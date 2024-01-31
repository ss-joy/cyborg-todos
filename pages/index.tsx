import { Inter } from "next/font/google";
import MainHeader from "@/components/MainHeader";
import Todos from "@/components/todo/Todos";
import ChatBot from "@/components/chatbot/ChatBot";
import { useSelector } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const state = useSelector((state) => state.notifications);
  const { toast } = useToast();
  if (state !== "") {
    toast({
      title: state.message,
    });
  }

  return (
    <div className={inter.className}>
      <MainHeader />
      <main className="flex flex-col justify-between border-2 border-blue-400 mx-auto w-[80%] p-10 mt-20 min-[1183px]:flex-row">
        <Todos />
        <ChatBot />
      </main>
      <Toaster />
    </div>
  );
}
