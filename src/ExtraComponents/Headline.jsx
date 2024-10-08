import React from "react";
import { useTodos } from "../context-and-reducer/TodoProvider";
import LottieAnimation from "../animation/LottieAnimation";

const Main = () => {
  const { todos } = useTodos();

  const getTotalTasks = () => {
    return todos.length;
  };

  const getTotalCompletedTasks = () => {
    return todos.filter((todo) => todo.completed).length;
  };

  return (
    <div>
      <main className="flex-grow flex flex-col justify-center items-center bg-gray-100 p-6 mt-[64px] rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to TaskMaster
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          A simple task management app
        </p>
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md text-center">
          <p className="text-md text-gray-700 mb-2">
            Total Tasks:{" "}
            <span className="font-semibold">{getTotalTasks()}</span>
          </p>
          <p className="text-md text-gray-700 mb-4">
            Total Completed Tasks:{" "}
            <span className="font-semibold">{getTotalCompletedTasks()}</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Main;
