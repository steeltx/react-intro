import { withStorageListener } from "./withStorageListener";
import './index.css';

function ChangeAlert ({show, toggleShow}) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };