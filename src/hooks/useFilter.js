import {useState} from "react";
import {handleSearch} from "../utils";

export const useFilter = (objList) => {
	const [filteredList, setFilteredList] = useState(objList);
	const onFilter = (inputStr) => setFilteredList(handleSearch(objList,inputStr));
	return [filteredList, onFilter]
}
