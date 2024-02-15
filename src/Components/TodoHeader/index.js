import { Children, cloneElement } from "react";

function TodoHeader ( { children, loading } ) {

    return(
        <header>
            {/* puede ser que children reciba null, arreglo u objetos, convertir en 
            array, iterar y clonar elemento para enviarle las propiedades a los hijos */}
            { 
                Children
                    .toArray(children)
                    .map(child => cloneElement(child, { loading }))
            }
        </header>
    );
}

export { TodoHeader};