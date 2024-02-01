import { useState } from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

// const defaultTodos = [
// 	{text: 'Aprender HTML', completed: true},
// 	{text: 'Aprender CSS', completed: true},
// 	{text: 'Aprender JS', completed: true},
// 	{text: 'Aprender React', completed: false}
// ];


// se crea un custom hook para manejar los datos en estado y LS
function useLocalStorage(itemName, initialValue) {
	const localStorageItem = localStorage.getItem(itemName);
	let parsedItem;
	if(!localStorageItem) {
		localStorage.setItem(itemName,JSON.stringify(initialValue));
		parsedItem = initialValue;
	}else{
		parsedItem = JSON.parse(localStorageItem);
	}

	const [item, setItem ] = useState(parsedItem);
	
	const saveItem = (newItems) => {
		setItem(newItems);
		localStorage.setItem(itemName, JSON.stringify(newItems));
	}
	return [item, saveItem];
}

function App() {

	const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter(
		(todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
	);

	const completeTodo = (text) => {
		// realizar una copia de los objetos
		const newTodos = [...todos];
		// buscar el indice que coincide con el texto
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		// cambiar el valor de completed
		newTodos[todoIndex].completed = true;
		// escribir el nuevo estado y guardar en LS
		saveTodos(newTodos);
	}

	const deleteTodo = (text) => {
		// realizar una copia de los objetos
		const newTodos = [...todos];
		// buscar el indice que coincide con el texto
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		// eliminar el registro
		newTodos.splice(todoIndex,1);
		// escribir el nuevo estado y guardar en LS
		saveTodos(newTodos);
	}

	return (
	<>
		<TodoCounter completed={completedTodos} total={totalTodos}/>
		<TodoSearch 
			searchValue={searchValue}
			setSearchValue={setSearchValue}
		/>
		<TodoList>
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

export default App;
