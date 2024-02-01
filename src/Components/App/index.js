import { useState } from 'react';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
// 	{text: 'Aprender HTML', completed: true},
// 	{text: 'Aprender CSS', completed: true},
// 	{text: 'Aprender JS', completed: true},
// 	{text: 'Aprender React', completed: false}
// ];

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
		<AppUI 
		completedTodos= {completedTodos}
		totalTodos= {totalTodos}
		searchValue= {searchValue}
		setSearchValue= {setSearchValue}
		searchedTodos= {searchedTodos}
		completeTodo= {completeTodo}
		deleteTodo= {deleteTodo}
		/> 
	);
}

export default App;
