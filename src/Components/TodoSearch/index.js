import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    // obtener las propiedades usando useContext e indicando el contexto
    const {searchValue, setSearchValue} = useContext(TodoContext);

    return(
        <input 
            className="TodoSearch" 
            placeholder="Estudiar JS" 
            value={searchValue}
            onChange={(event) => 
                setSearchValue(event.target.value)
            }
        />
    )
}

export { TodoSearch };