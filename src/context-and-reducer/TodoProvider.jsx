// TodoProvider.js
import React, { createContext, useContext } from "react";
import { useTodoReducer } from "./useTodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { state, dispatch } = useTodoReducer();

  return (
    <TodoContext.Provider value={{ todos: state.todos, dispatch }}>
      {children} {/* This will render any children wrapped by TodoProvider */}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodoContext);
};
