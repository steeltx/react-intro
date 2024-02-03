import { TodoCounter } from '../../Components/TodoCounter';
import { TodoSearch } from '../../Components/TodoSearch';
import { TodoList } from '../../Components/TodoList';
import { TodoItem } from '../../Components/TodoItem';
import { CreateTodoButton } from '../../Components/CreateTodoButton';

function AppUI ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos}/>
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {loading && <p>Cargando ...</p>}
                {error && <p>Error al cargar</p>}
                {(!loading && searchedTodos.length < 1) && <p>Crea tu primer tarea</p>}
                {
                    searchedTodos.map(todo => (
                        <TodoItem 
                            key={todo.text}
                            text={todo.text} 
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))
                }
            </TodoList>
            <CreateTodoButton />
        </>
    );
}

export { AppUI }; 