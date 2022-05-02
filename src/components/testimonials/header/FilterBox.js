import {SearchIcon} from "../../../assets/testimonials";
import {useState} from "react";

export const FilterBox = ({onFilter}) => {
	const [searchVal, setSearchVal] = useState('');
	const handleChange = (e) =>{
		setSearchVal(e.target.value);
		onFilter(e.target.value);
	}
	return(
		<div className={"flex items-center"}>
			<img src={SearchIcon} alt={"search"} className={"ml-4 absolute w-6 h-6 bg-gray-200"}/>
			<input placeholder={"Filter by exercise title"} className={"pl-12 pr-2 py-2 h-10 rounded-lg bg-gray-200"} value={searchVal} onChange={handleChange} defaultValue={''}/>
		</div>
	)
}
