const Footer = ({completedTodos, allTodos}) => {
  return (
    <>
      <footer className="absolute bottom-0 w-full">
        <div className="mx-auto text-center flex flex-row space-x-4 p-2 text-white bg-green-700 justify-center font-bold text-2xl">
          <span>All Todos: {allTodos}</span>
          <span>Completed Todos: {completedTodos}</span>
        </div>
      </footer>
    </>
   );
}

export default Footer;
