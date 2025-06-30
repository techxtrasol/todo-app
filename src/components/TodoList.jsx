import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <>
      <div className="mx-auto lg:w-1/2 sm:w-full px-2 justify-center">
        {todos.map(todo => (
          <TodoItem key={todo} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
