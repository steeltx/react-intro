import { useContext } from 'react';
import { TodoCounter } from '../../Components/TodoCounter';
import { TodoSearch } from '../../Components/TodoSearch';
import { TodoList } from '../../Components/TodoList';
import { TodoItem } from '../../Components/TodoItem';
import { CreateTodoButton } from '../../Components/CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../../TodoContext';

function AppUI () {

    // obtener las propiedades usando useContext e indicando el contexto
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                    {loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    )}
                    {error && <TodosError />}
                    {(!loading && searchedTodos.length < 1) && <EmptyTodos />}
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