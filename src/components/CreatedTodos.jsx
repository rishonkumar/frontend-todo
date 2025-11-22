import { useState } from "react";


export const CreateTodos = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    async function handleAddTodo() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                done: false
            })
        })

        if (!res.ok) {
            throw new Error("Failed to add todo");
        }
        const data = await res.json();
        console.log(data);
    }
    return (
        <>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} /><br />
            <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} /><br />
            <button onClick={handleAddTodo}>Add a todo</button>
        </>
    )
}