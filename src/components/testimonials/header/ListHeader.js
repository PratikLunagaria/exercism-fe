import {TrackDropdown} from "./dropdown/TrackDropdown";
import {SortDropdown} from "./dropdown/SortDropdown";
import {FilterBox} from "./FilterBox";

export const ListHeader = ({listParams, setListParams}) => {
	const handleSearchChange = (inputQuery) => {
		setListParams({...listParams, exercise: inputQuery})
	}

	const handleTrackChange = (selectedTrack) => {
		setListParams({...listParams, track:selectedTrack.slug === 'all' ? undefined : selectedTrack.slug})
	}

	const handleSort = (selectedSort) => {
		setListParams({...listParams, order: selectedSort.slug})
	}

	return (
		<div className={"flex rounded-t-xl border-2 p-2 justify-between items-center"}>
			<div className={"flex"}>
				<TrackDropdown {...{listParams, handleTrackChange}}/>
				<FilterBox {...{inputVal:listParams.exercise,handleSearchChange}}/>
			</div>
			<div className={"flex flex-1 justify-end"}>
				<SortDropdown {...{sortType: listParams.order, handleSort}}/>
			</div>
		</div>
	)
}
