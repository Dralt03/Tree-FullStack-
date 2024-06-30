import Image from "next/image";
import { seed } from "@/utils/tree";
import Tree from "@/components/Tree";

export default function Home() {
  return (
    <main className="flex justify-center items-start h-screen w-screen">
      <div className="h-screen w-full mt-5">
        <Tree node={seed} />
      </div>
    </main>
  );
}
