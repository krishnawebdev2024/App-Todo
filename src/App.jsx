// App.js
import React from "react";
import TodoList from "./Main-components/TodoList";
import AddTodo from "./Main-components/AddTodo";
import Nav from "./ExtraComponents/Nav";
import Footer from "./ExtraComponents/Footer";
import Headline from "./ExtraComponents/Headline";

import { TodoProvider } from "./context-and-reducer/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <Nav />
      <Headline />

      <div className="container mx-auto p-6 mt-[20px]">
        <AddTodo />
        <TodoList />
      </div>
      <Footer />
    </TodoProvider>
  );
};

export default App;
