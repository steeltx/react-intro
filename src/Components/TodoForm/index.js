import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css';

function TodoForm () {

    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const onChange = (event      ) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe la nueva tarea</label>
            <textarea 
                placeholder="Ingresa la nueva tarea a realizar"
                value={newTodoValue}
                onChange={onChange}
                required
            /> 
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm } ;