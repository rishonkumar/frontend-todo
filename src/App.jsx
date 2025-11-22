
import { useEffect, useState } from 'react';
import './App.css'
import { CreateTodos } from "./components/CreatedTodos.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {

  const [todos, setTodos] = useState([]);

  // [] only run once
  // [todo] runs when todo changes (render)

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  //     .then(res => res.json())
  //     .then(data => setTodos(data));
  // }, []);




  return (
    <>
      <CreateTodos />
      <Todos todos={todos} />
    </>
  )
}

export default App
