import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodos, setEditTodos] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="card">
      <Heading />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodos={editTodos}
        setEditTodos={setEditTodos}
      />
      <div className="todo-cont">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodos={setEditTodos}
        />
      </div>
    </div>
  );
};

export default App;
