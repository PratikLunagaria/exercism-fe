import {TrackDropdown} from "./dropdown/TrackDropdown";
import {trackList} from "../../../mock";
import {SortDropdown} from "./dropdown/SortDropdown";
import {FilterBox} from "./FilterBox";

const sortOpts = [
	{title: 'Sort by Oldest', slug:''},
	{title: 'Sort by Most Recent', slug:''},
]


export const ListHeader = () => {
	return (
		<div className={"flex rounded-t-xl border-2 p-2 justify-between items-center"}>
			<div className={"flex items-center"}>
				<TrackDropdown list={trackList.tracks}/>
				<FilterBox/>
			</div>
			<SortDropdown list={sortOpts}/>
		</div>
	)
}
