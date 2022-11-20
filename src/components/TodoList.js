import React from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "./Icons";

const TodoList = ({ todos, setTodos, setEditTodos }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDeleteTodo = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodos(findTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="todoList" key={todo.id}>
          <input
            type="text"
            className={`todoListInput ${todo.completed ? "done" : ""}`}
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-small one"
              onClick={() => handleComplete(todo)}
            >
              <FaCheckCircle />
            </button>
            <button
              className="button-small two"
              onClick={() => handleEditTodo(todo)}
            >
              <FaEdit />
            </button>
            <button
              className="button-small three"
              onClick={() => handleDeleteTodo(todo)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
