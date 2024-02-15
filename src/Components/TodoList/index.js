import './TodoList.css';

function TodoList( props ) {
    // valida que va a mostrar, si es prop o render function
    const renderFunc = props.children || props.render(); 
    return(
        <section className='TodoList-container'>
            {/* Cuando sea error, renderizar lo que viene en la funcion onError */}
            
            { props.error && props.onError() }
            
            { props.loading && props.onLoading() }
            
            { (!props.loading && !props.totalTodos) && props.onEmptyTodos() }
            
            { (!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
            
            { props.searchedTodos.map(renderFunc) }
            {/* <ul className="TodoList">
                {props.children}
            </ul> */}
        </section>
    )
}

export { TodoList };