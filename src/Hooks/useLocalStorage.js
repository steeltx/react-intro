import { useState } from "react";

// se crea un custom hook para manejar los datos en estado y LS
function useLocalStorage(itemName, initialValue) {
	const localStorageItem = localStorage.getItem(itemName);
	let parsedItem;
	if(!localStorageItem) {
		localStorage.setItem(itemName,JSON.stringify(initialValue));
		parsedItem = initialValue;
	}else{
		parsedItem = JSON.parse(localStorageItem);
	}

	const [item, setItem ] = useState(parsedItem);
	
	const saveItem = (newItems) => {
		setItem(newItems);
		localStorage.setItem(itemName, JSON.stringify(newItems));
	}
	return [item, saveItem];
}

export { useLocalStorage };