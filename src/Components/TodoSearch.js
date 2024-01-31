import '../css/TodoSearch.css';

function TodoSearch( { searchValue, setSearchValue} ) {

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