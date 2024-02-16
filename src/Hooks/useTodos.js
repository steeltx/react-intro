import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

function useTodos(){

    const { 
			item: todos, saveItem: saveTodos, loading, error, sincronizeItem : sincronizeTodos
		} = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = useState('');

	const [openModal, setOpenModal] = useState(false);

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter(
		(todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
	);

	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			text,
			completed: false 
		});
		saveTodos(newTodos);
	}

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
        {
			loading,
			error,
			completedTodos,
			totalTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			completeTodo,
			deleteTodo,
			openModal,
			setOpenModal,
			addTodo,
			sincronizeTodos
        }
    )

}

export  { useTodos };