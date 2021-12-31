import { useEffect, useState } from "react"
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css'
import BackToTop from "./components/BackToTop";
import Countdown from "./components/Countdown";
import Caculator from "./components/Calculator";

function App() {
  // TodoForm

  // const handleSubmitForm = (value) => {
  //   const newTodos = [...todos]
  //   newTodos.push({
  //     id: Math.random(),
  //     name: value
  //   })
  //   setTodos(newTodos)
  // }
  // // TodoForm End

  // // TodoList
  // const [todos,setTodos] = useState([
  //   {id: 1,name: "Todo 1"},
  //   {id: 2,name: "Todo 2"},
  //   {id: 3,name: "Todo 3"},
  // ])
  // const handleDeleteItem = todo => {
  //   const index = todos.findIndex(item => item.id === todo.id)
  //   const newTodos = [...todos]
  //   newTodos.splice(index,1)
  //   setTodos(newTodos)
  // }
  // // TodoList End

  // // PostList
  // const [page,setPage] = useState(1)
  // const [posts,setPosts] = useState([])

  // const api = `https://jsonplaceholder.typicode.com/posts?_limit=54&_page=${page}`
  
  // useEffect(() => {
  //   try {
  //     async function getPosts() {
  //       const respon = await fetch(api)
  //       const data = await respon.json()
  //       setPosts(data)
  //     }
  //     getPosts()
  //   } catch (e) {
  //     console.log(e)
  //   }
    
  // },[page])

  //   // Pagination
  // const handlePrevButtonClick = () => {
  //   setPage(page - 1)
  // }
  // const handleNextButtonClick = () => {
  //   setPage(page + 1)
  // }

  // // BackToTop
  // const [showBackToTop,setShowBackToTop] = useState()
  // console.log('re-render')
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowBackToTop(window.scrollY > 200)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // },[])
  // const handleClickBackToTop = () => {
  //   window.scrollTo(0,0)
  // }
  // // Countdown
  // const [showCountdown,setShowCountdown] = useState(false)
  // const handleShowHideCountDown = () => {
  //   setShowCountdown(!showCountdown)
  // }


  return (
    <div className="App">

        {/* <button onClick={handleShowHideCountDown}>Show/Hide Countdown</button>
        {showCountdown && <Countdown counts={60} />}
        <TodoForm onSubmit={handleSubmitForm} />
        <TodoList todos={todos} deleteItem={handleDeleteItem} />
        <PostList posts={posts} onPrevButtonClick={handlePrevButtonClick} onNextButtonClick={handleNextButtonClick} page={page}/>
        {showBackToTop && <BackToTop onCLickBackToTop={handleClickBackToTop} />} */}
        <Calculator />
    </div>
  );
}

export default App;
