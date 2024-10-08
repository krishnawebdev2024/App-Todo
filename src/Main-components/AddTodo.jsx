// AddTodo.js
import React, { useState } from "react";
import { useTodos } from "../context-and-reducer/TodoProvider";
/* ---------------------------------------------------------------- */
const AddTodo = () => {
  const [task, setTask] = useState("");
  /* ---------------------------------------------------------------- */
  const { dispatch } = useTodos();
  /* ---------------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim()) {
      const newTodo = {
        id: Date.now(), // Unique ID
        task,
        completed: false,
      };

      dispatch({ type: "ADD_TODO", payload: newTodo });

      setTask("");
    }
  };
  /* ---------------------------------------------------------------- */
  return (
    <form onSubmit={handleSubmit} className="flex justify-center  space-x-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="input input-bordered w-full max-w-xs"
      />

      <button type="submit" className="btn btn-primary ">
        Add Todo
      </button>
    </form>
  );
};
/* ---------------------------------------------------------------- */
export default AddTodo;
