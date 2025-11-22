export const Todos = ({ todos }) => {
    return (
        <div>
            <h1>Todos</h1>
            {todos.map(function (todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h1>{todo.description}</h1>
                        <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}