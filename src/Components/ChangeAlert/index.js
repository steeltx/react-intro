import { useStorageListener } from "./useStorageListener";
import './index.css';

function ChangeAlert ( { sincronize } ) {
    
    const {show, toggleShow} = useStorageListener(sincronize);

    if(show){
        return (
            <div className="Container">
                <p>Cambios detectados...</p>
                <button className='Container--button' onClick={() => toggleShow(false)}>
                    Volver a cargar la información
                </button>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };