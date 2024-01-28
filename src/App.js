import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
import './App.css';

function App() {
	return (
	<div className="App">
		<TodoCounter />
		<TodoSearch />
		<TodoList>
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</TodoList>
		<CreateTodoButton />
	</div>
	);
}

export default App;
