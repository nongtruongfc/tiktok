import { useState } from "react"
import TodoList from "./components/TodoList";


function App() {
  const [todos,setTodos] = useState([
    {id: 1,name: "Todo 1"},
    {id: 2,name: "Todo 2"},
    {id: 3,name: "Todo 3"},
  ])
  const handleDeleteItem = todo => {
    const index = todos.findIndex(item => item.id === todo.id)
    console.log(index)
  }
  return (
    <div className="App">
        <TodoList todos={todos} deleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
