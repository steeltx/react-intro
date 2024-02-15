import './TodoCounter.css';

function TodoCounter({completedTodos,totalTodos, loading}) {

    return(
        totalTodos === completedTodos 
        ?
        <h1 
            className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Felicidades, terminaste todas tus tareas !!
        </h1>
        :
        <h1 
            className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Has completado { completedTodos } de { totalTodos } tareas
        </h1>
    )
}

export { TodoCounter };