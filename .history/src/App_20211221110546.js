import { useState } from "react"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
  // TodoForm

  // TodoForm End

  // TodoList
  const [todos,setTodos] = useState([
    {id: 1,name: "Todo 1"},
    {id: 2,name: "Todo 2"},
    {id: 3,name: "Todo 3"},
  ])
  const handleDeleteItem = todo => {
    const index = todos.findIndex(item => item.id === todo.id)
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  // TodoList End

  return (
    <div className="App">
        <TodoForm />
        <TodoList todos={todos} deleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
