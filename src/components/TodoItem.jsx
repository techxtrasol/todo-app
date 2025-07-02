const TodoItem = ({ todo, todos, setTodos }) => {
  function handleDelete(todoToDelete) {
    console.log(todoToDelete)
    setTodos(todos.filter((t) => t !== todoToDelete))
  }
  function handleCompletedTodo(completedTodo) {
    console.log(todos)
    console.log(completedTodo)
    let updatedList = [...todos.filter((t) => t !== completedTodo), completedTodo]
    console.log(updatedList)
    setTodos(updatedList)
  }
  function handleClick(name) {
    const newArray = todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo)
    setTodos(newArray)
    console.log(todos)
  }
  
  return (
    <>
      <div className="flex flex-row justify-between rounded-sm mt-3 p-3 bg-green-700">
        <input onClick={() => handleCompletedTodo(todo)} className="accent-green-600 w-5 h-5" type="checkbox" />
        <h3 onClick={() => handleClick(todo.name)} className={`text-2xl font-bold ${todo.done ? "line-through text-gray-400" : ""} text-white`}>{todo.name}</h3>
        <button
          className="cursor-pointer font-extrabold bg-green-900 text-red-500 rounded-xl px-4 py-2 shadow-2xl"
          onClick={() => handleDelete(todo.name)}
        >
          X
        </button>
      </div>
    </>
  );
}

export default TodoItem;
