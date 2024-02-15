import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {

    return(
        <input 
            className="TodoSearch" 
            placeholder="Estudiar JS" 
            value={searchValue}
            onChange={(event) => 
                setSearchValue(event.target.value)
            }
            disabled={loading}
        />
    )
}

export { TodoSearch };