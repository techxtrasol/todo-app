import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <div className="mx-auto lg:w-1/2 sm:w-full px-2 justify-center">
        {todos.map(todo => (
          <TodoItem key={todo.name} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
