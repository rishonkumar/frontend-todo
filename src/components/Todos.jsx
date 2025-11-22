import { useEffect, useState } from "react"

export const Todos = ({ id }) => {

    const [todo, setTodo] = useState({})


    useEffect(() => {
        const data = fetch("https://jsonplaceholder.typicode.com/todos/" + id)
            .then(res => res.json())
            .then(data => setTodo(data))

    }, [id]) //run again when id changes

    // this code will fetch todos every 10 seconds
    // useEffect(() => {
    //     setInterval(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos/")
    //         .then(res => res.json())
    //     }, 10000);
    // }, []);


    return (
        <div>
            <h1>Todos #{id}</h1>

            <h1>Title : {todo.title}</h1>
            <h1>Description : {todo.title}</h1>
            <h1>Completed : {todo.completed == true ? "Completed" : "Not Completed"}</h1>

            {/* {todos.map(function (todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h1>{todo.description}</h1>
                        <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })} */}
        </div>
    )
}