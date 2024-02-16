import { useEffect, useState } from "react";

// se crea un custom hook para manejar los datos en estado y LS
function useLocalStorage(itemName, initialValue) {

	const [item, setItem ] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	// estado para indicar si la información se encuentra sincronizada en el LS
	const [sincronizedItem, setSincronizedItem] = useState(true);

	useEffect( () => {
		setTimeout( () => {
			try{
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;
	
				if(!localStorageItem) {
					localStorage.setItem(itemName,JSON.stringify(initialValue));
					parsedItem = initialValue;
				}else{
					parsedItem = JSON.parse(localStorageItem);
				}
				setItem(parsedItem);
				setLoading(false);
				setSincronizedItem(true);
			}catch(error){
				setError(true);
				setLoading(false);
			}
		},1000);
	}, [initialValue, itemName, sincronizedItem]);

	const saveItem = (newItems) => {
		setItem(newItems);
		localStorage.setItem(itemName, JSON.stringify(newItems));
	}

	const sincronizeItem = () => {
		setLoading(true);
		setSincronizedItem(false);
	}

	return {item, saveItem, loading, error, sincronizeItem};
}

export { useLocalStorage };