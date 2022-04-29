import {ArrowDownIcon} from "../../../assets/testimonials";

export const ListItem = ({ track, mentor, exercise, content, created_at }) => {
	return(
		<a href={"/#"} className={"border-b-listBorderL border-b-2 hover:bg-gray-200"}>
			<div className={"h-16 flex justify-between items-center mx-6"}>
				<div className={"flex items-center w-1/4"}>
					<img className={"h-8 w-8"}  alt={track.slug && track.slug} src={track.icon_url && track.icon_url}  />
					<img className={"h-8 w-8 rounded-full ml-4"}  alt={mentor.slug && mentor.slug} src={mentor.avatar_url && mentor.avatar_url}  />
					<div className={"ml-5"}>
						<div className={"text-base font-semibold"}>{mentor.handle && mentor.handle}</div>
						<div className={"text-sm text-inactiveL"}>on {exercise.title && exercise.title} in {track.title && track.title}</div>
					</div>
				</div>
				<div className={"flex flex-row text-inactiveL w-2/4"}>
					{content && content}
				</div>
				<div className={"flex text-inactiveL w-1/6 flex-row-reverse"}>
					<img className={"ml-14 h-5 w-5 inline-flex rounded-full align-middle -rotate-90"}  alt={"reputation"} src={ArrowDownIcon}  />
					<div className={"justify-self-end"}>{ created_at && created_at }</div>
				</div>
			</div>
		</a>
	)
}