import { useTodos } from '../../Hooks/useTodos';
import { TodoCounter } from '../../Components/TodoCounter';
import { TodoSearch } from '../../Components/TodoSearch';
import { TodoList } from '../../Components/TodoList';
import { TodoItem } from '../../Components/TodoItem';
import { CreateTodoButton } from '../../Components/CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';

function App() {

	// obtener las propiedades usando useTodos
	const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
		setOpenModal,
        completedTodos,
        totalTodos,
        searchValue, 
        setSearchValue,
		addTodo
    } = useTodos();

	return (
        <>
            <TodoHeader>
                <TodoCounter 
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
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
            <CreateTodoButton 
				openModal={openModal}
				setOpenModal={setOpenModal}
				/>
            {
                openModal && (
                    <Modal>
                        <TodoForm 
							addTodo={addTodo}
							setOpenModal={setOpenModal}
						/>
                    </Modal>
                )
            }
        </>
    );
}

export default App;
