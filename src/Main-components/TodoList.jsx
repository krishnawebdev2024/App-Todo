import React from "react";
import { useTodos } from "../context-and-reducer/TodoProvider";
/* ---------------------------------------------------------------- */
const TodoList = () => {
  const { todos, dispatch } = useTodos();
  /* ---------------------------------------------------------------- */
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  /* ---------------------------------------------------------------- */
  const handleToggleComplete = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };
  /* ---------------------------------------------------------------- */
  const handleUpdate = (id) => {
    const newTask = prompt(
      "Enter the new task:",
      todos.find((todo) => todo.id === id)?.task
    );
    if (newTask) {
      dispatch({ type: "UPDATE_TODO", payload: { id, task: newTask } });
    }
  };
  /* ---------------------------------------------------------------- */
  return (
    <ul className="max-w-xl mx-auto p-4 space-y-4 bg-gray-100 rounded-lg shadow-md mt-10 mb-[100px]">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-3 border border-gray-300 rounded-lg overflow-hidden
          ${todo.completed ? "bg-green-400 line-through text-gray-500" : ""}`}
        >
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {todo.task}
          </span>

          <div className="space-x-2 flex-shrink-0">
            <button
              onClick={() => handleToggleComplete(todo.id)}
              className="btn btn-accent"
            >
              {todo.completed ? "Completed" : "Complete"}
            </button>

            <button
              onClick={() => handleUpdate(todo.id)}
              className="btn btn-neutral"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(todo.id)}
              className="btn btn-active btn-error ml-2"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
