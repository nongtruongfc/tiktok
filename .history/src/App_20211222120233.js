import { useEffect, useState } from "react"
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css'

function App() {
  // TodoForm

  const handleSubmitForm = (value) => {
    const newTodos = [...todos]
    newTodos.push({
      id: Math.random(),
      name: value
    })
    setTodos(newTodos)
  }
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

  // PostList
  const [page,setPage] = useState(1)
  const [posts,setPosts] = useState([])

  const api = `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
  
  useEffect(() => {
    try {
      async function getPosts() {
        const respon = await fetch(api)
        const data = await respon.json()
        setPosts(data)
      }
      getPosts()
    } catch (e) {
      console.log(e)
    }
    
  },[page])

    // Pagination
  const handlePrevButtonClick = () => {
    console.log('prev')
    setPage(page - 1)
  }
  const handleNextButtonClick = () => {
    console.log('next')
    setPage(page + 1)
  }
  return (
    <div className="App">
        <TodoForm onSubmit={handleSubmitForm} />
        <TodoList todos={todos} deleteItem={handleDeleteItem} />
        <PostList posts={posts} onPrevButtonClick={handlePrevButtonClick} onNextButtonClick={handleNextButtonClick} />

    </div>
  );
}

export default App;
