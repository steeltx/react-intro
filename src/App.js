import { useState } from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

const defaultTodos = [
	{text: 'Aprender HTML', completed: true},
	{text: 'Aprender CSS', completed: true},
	{text: 'Aprender JS', completed: true},
	{text: 'Aprender React', completed: false}
];

function App() {
	
	const [todos, setTodos] = useState(defaultTodos);
	const [searchValue, setSearchValue] = useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	return (
	<>
		<TodoCounter completed={completedTodos} total={totalTodos}/>
		<TodoSearch 
			searchValue={searchValue}
			setSearchValue={setSearchValue}
		/>
		<TodoList>
			{
				defaultTodos.map(todo => (
					<TodoItem 
						key={todo.text}
						text={todo.text} 
						completed={todo.completed}
					/>
				))
			}
		</TodoList>
		<CreateTodoButton />
	</>
	);
}

export default App;
