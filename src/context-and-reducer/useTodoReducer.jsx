import { useReducer, useEffect } from "react";

const todoReducer = (state, action) => {
  /* ---------------------------------------------------------------- */
  switch (action.type) {
    /* ---------------------------------------------------------------- */
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    /* ---------------------------------------------------------------- */
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    /* ---------------------------------------------------------------- */
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task }
            : todo
        ),
      };
    /* ---------------------------------------------------------------- */
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    /* ---------------------------------------------------------------- */
    default:
      return state;
  }
};
/* ---------------------------------------------------------------- */

// a custom hook to initialize the reducer and sync with localStorage
export const useTodoReducer = () => {
  const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos)); // Save todos to localStorage
  }, [state.todos]);

  return { state, dispatch };
};
