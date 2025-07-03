import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
    const [todos, setTodos] = useState([])
    const completedTodos = todos.filter((todo) => todo.done).length
    const allTodos = todos.length
  return (
    <>
    < Form todos={todos} setTodos={setTodos} />
    < TodoList todos={todos} setTodos={setTodos} />
    < Footer completedTodos={completedTodos} allTodos={allTodos}/>
    </>
  );
}

export default Todo;
