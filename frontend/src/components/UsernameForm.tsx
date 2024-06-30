"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UsernameForm: React.FC = () => {
  const userContext = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  if (!userContext) {
    return null;
  }

  const { setUsername } = userContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your username"
        className="px-4 py-2 mb-4 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default UsernameForm;
