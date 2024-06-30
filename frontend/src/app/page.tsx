"use client";
import UsernameInput from "@/components/UsernameForm";
import { seed } from "@/utils/tree";
import Tree from "@/components/Tree";
import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Home = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return null;
  }

  const { username } = userContext;
  return (
    <main className="flex flex-col justify-center items-center mt-10 h-screen w-screen">
      <UsernameInput />
      {username && <p>Hello {username}</p>}
      <div className="h-screen w-full mt-20">
        <Tree node={seed} />
      </div>
    </main>
  );
};

export default Home;
