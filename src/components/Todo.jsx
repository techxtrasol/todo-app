import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Todo = () => {
    const [todos, setTodos] = useState([])
  return (
    <>
    < Form todos={todos} setTodos={setTodos} />
    < TodoList todos={todos}/>
    </>
  );
}

export default Todo;
