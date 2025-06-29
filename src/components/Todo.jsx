import { useState } from "react";

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
      <div className="mx-auto w-1/2 justify-center">
        <form onSubmit={handleTodoSubmit}>
          <div className="space-x-1 pt-6">
            <input
              className="text-2xl border border-green-600 py-2 rounded" type="text"
              onChange={(event) => setTodo(event.target.value)}
              value={todo}
            />
            <button
              className="cursor-pointer px-4 py-3 rounded-md bg-green-700 text-white"
            >
              Add Todo
            </button>
          </div>
          {todos.map(todo => (
            <h3 key={todo}>{todo}</h3>
          ))}
        </form>
      </div>
    </>
  );
}

export default Todo;
