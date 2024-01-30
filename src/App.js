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
	return (
	<>
		<TodoCounter completed={10} total={25}/>
		<TodoSearch />
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
