// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import TodoForm from "./TodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos])
  }
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};
