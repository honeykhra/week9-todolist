import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodos,
  setEditTodos,
}) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodos("");
  };

  useEffect(() => {
    if (editTodos) {
      setInput(editTodos.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodos]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodos) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodos.id, editTodos.completed);
    }
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="text-input">
        <input
          type="text"
          placeholder="Enter a ToDo"
          value={input}
          onChange={onInputChange}
          required
        />
        <button>{editTodos ? "Ok" : "Add Item"}</button>
      </div>
    </form>
  );
};

export default Form;
