import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  // state
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  function handleTodoSubmit(e) {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo("")
  }
  return (
    <>
      <div className="mx-auto lg:w-1/2 sm:w-full px-2 justify-center">
        <form onSubmit={handleTodoSubmit}>
          <div className="space-y-1 pt-6 flex flex-col">
            <input
              className="text-2xl border-2 focus:outline-none px-1 text-green-700 border-green-600 py-2 rounded" type="text"
              onChange={(event) => setTodo(event.target.value)}
              value={todo}
            />
            <button
              className="cursor-pointer font-extrabold text-xl px-4 py-3 rounded-md bg-green-700 text-white"
            >
              Add Todo
            </button>
          </div>

            {todos.map(todo => (
              <ul>
              <TodoItem key={todo} todo={todo} />
               </ul>
            ))}

        </form>
      </div>
    </>
  );
}

export default Todo;
