import { useState, useEffect } from "react";

import "./App.css";
import MyForm from "./components/MyForm";
import MyTasks from "./components/MyTasks";

function App() {
  const [todos, setTodos] = useState(() => {
    const localStorageValue = localStorage.getItem("ITEMS");
    if (localStorageValue == null) return [];
    return JSON.parse(localStorageValue);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (title) => {
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };
  const toggleTodo = (id, completed) => {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <div className="header-container bg-dark text-light p-4 text-center">
        <h1>React To Do list</h1>
      </div>
      <MyForm addTodo={addTodo} />
      <MyTasks todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
