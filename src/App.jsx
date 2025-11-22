
import { memo, useEffect, useState } from 'react';
import './App.css'
import { CreateTodos } from "./components/CreatedTodos.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {

  const [selectedId, setSelectedId] = useState(1);

  // [] only run once 
  // [todo] runs when todo changes (render)

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  //     .then(res => res.json())
  //     .then(data => setTodos(data));
  // }, []);


  // this code will fetch todos every 10 seconds
  useEffect(() => {
    setInterval(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then(data => setTodos(data));
    }, 10000);
  }, []);


  return (
    <>
      {/* <CreateTodos />
      <Todos id={2} /> */}
      <button onClick={() => setSelectedId(1)}>Todo 1</button>
      <button onClick={() => setSelectedId(2)}>Todo 2</button>
      <button onClick={() => setSelectedId(3)}>Todo 3</button>
      <Todos id={selectedId} />

      <ButtonComponent />
      <ButtonComponentWithoutMemo />
    </>
  )

}

// We will useMemo if we dont want to render child component un-necessary basically we will avodi re-render when parents render
const ButtonComponent = memo(() => {
  console.log("child render with memo");

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  )
  
})

const ButtonComponentWithoutMemo = () => {
  console.log("child render without memo");

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  )
  
}

export default App
