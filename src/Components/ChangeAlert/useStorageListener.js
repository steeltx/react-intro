import { useState } from "react";

function useStorageListener(sincronize){
    
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
        sincronize();
        setStorageChange(false);
    }

    return {
        show: storageChange,
        toggleShow
    }
}

export { useStorageListener };