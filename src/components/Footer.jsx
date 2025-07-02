const Footer = ({completedTodos}) => {
  return (
    <>
      <footer className="absolute bottom-0 w-full">
        <div className="mx-auto text-center p-2 text-white bg-green-700 justify-center font-bold text-2xl">
          Completed Todos: {completedTodos}
        </div>
      </footer>
    </>
   );
}

export default Footer;
