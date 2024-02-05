import { TodoProvider } from '../../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
// 	{text: 'Aprender HTML', completed: true},
// 	{text: 'Aprender CSS', completed: true},
// 	{text: 'Aprender JS', completed: true},
// 	{text: 'Aprender React', completed: false}
// ];

function App() {

	return ( 
		<TodoProvider>
			<AppUI /> 
		</TodoProvider>
	);
}

export default App;
