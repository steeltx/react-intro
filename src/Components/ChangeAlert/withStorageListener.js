import { useState } from "react";


function withStorageListener(WrapperComponent){
    return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = useState(false);
        // cuando ocurra un cambio en el storage
        window.addEventListener('storage', (change) => {
            // si el cambio ocurre en la key que configuramos
            if(change.key === 'TODOS_V1'){
                console.log('Hubo cambios');
                // establecer el estado en true
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }

        return (
            <WrapperComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        );
    }
}

export { withStorageListener };