import {TrackDropdown} from "./dropdown/TrackDropdown";
import {SortDropdown} from "./dropdown/SortDropdown";
import {FilterBox} from "./FilterBox";

const sortOpts = [
	{title: 'Sort by Oldest', slug:''},
	{title: 'Sort by Most Recent', slug:''},
]

export const ListHeader = ({trackList, onFilter}) => {
	return (
		<div className={"flex rounded-t-xl border-2 p-2 justify-between items-center"}>
			<div className={"flex"}>
				<TrackDropdown list={trackList.tracks}/>
				<FilterBox onFilter={onFilter}/>
			</div>
			<div className={"flex flex-1 justify-end"}>
				<SortDropdown list={sortOpts}/>
			</div>
		</div>
	)
}
