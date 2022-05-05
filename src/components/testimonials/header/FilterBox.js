import {SearchIcon} from "../../../assets/testimonials";
import {useState} from "react";

export const FilterBox = ({inputVal, handleSearchChange}) => {
	const [searchVal, setSearchVal] = useState(inputVal);

	return(
		<div className={"flex items-center"}>
			<img src={SearchIcon} alt={"search"} className={"ml-4 absolute w-6 h-6 bg-gray-200"}/>
			<input
				placeholder={"Filter by exercise title"}
				className={"pl-12 pr-2 py-2 h-10 rounded-lg bg-gray-200"}
				value={searchVal}
				onChange={e=>setSearchVal(e.target.value)}
				onKeyDown={(event)=> {
					event.key === "Enter" && handleSearchChange(searchVal ? searchVal : undefined)
					console.log(searchVal)
				}}
			/>
		</div>
	)
}
