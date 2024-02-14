import './TodoCounter.css';

function TodoCounter({completedTodos,totalTodos}) {

    return(
        totalTodos === completedTodos 
        ?
        <h1 className='TodoCounter'>
            Felicidades, terminaste todas tus tareas !!
        </h1>
        :
        <h1 className='TodoCounter'>
            Has completado { completedTodos } de { totalTodos } tareas
        </h1>
    )
}

export { TodoCounter };