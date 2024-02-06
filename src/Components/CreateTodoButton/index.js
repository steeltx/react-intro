import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton() {

    const {
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        <button className="CreateTodoButton"
            onClick={ () => setOpenModal(!openModal)}
        >+</button>
    );
}

export { CreateTodoButton };
