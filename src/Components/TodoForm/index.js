import './TodoForm.css';

function TodoForm () {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
        }}>
            <label>Escribe la nueva tarea</label>
            <textarea 
                placeholder="Ingresa la nueva tarea a realizar"
            /> 
            <div className="TodoForm-buttonContainer">
                <button type="" className="TodoForm-button TodoForm-button--cancel">
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