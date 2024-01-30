import Image from "next/image";
import { Inter } from "next/font/google";
import MainHeader from "@/components/MainHeader";
import Todos from "@/components/todo/Todos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <MainHeader />
      <main className="flex border-2 border-red-400 mx-auto w-[80%] mt-20">
        <Todos />
      </main>
    </div>
  );
}
