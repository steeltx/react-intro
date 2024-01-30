import { CheckIcon } from '@heroicons/react/24/solid'
import '../css/TodoItem.css';

function TodoItem( { text, completed } ) {
    return (
    <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
            <CheckIcon />
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}> { text } </p>
        <span className="Icon Icon-delete">
            X
        </span>
    </li>
    );
}

export { TodoItem };
