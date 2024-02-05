import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css'

function TodoCounter() {

    // obtener las propiedades usando useContext e indicando el contexto
    const {completedTodos,totalTodos} = useContext(TodoContext);

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