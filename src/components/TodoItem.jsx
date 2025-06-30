const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="flex flex-row justify-between rounded-sm mt-3 p-3 bg-green-700">
        <h3 key={todo} className="text-2xl font-bold text-white">{todo}</h3>
        <button
          className="cursor-pointer font-extrabold bg-green-900 text-red-500 rounded-xl px-4 py-2 shadow-2xl"
        >
          X
        </button>
      </div>
    </>
  );
}

export default TodoItem;
