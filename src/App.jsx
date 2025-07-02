import Todo from "./components/Todo"
import TopBar from "./components/TopBar"

function App() {
  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-gray-100">
        < Todo />
      </div>

    </>
  )
}

export default App
