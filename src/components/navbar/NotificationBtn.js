import {AlarmBellIcon } from "../../assets/navbar"
export const NotificationBtn = () => {
	return(
		//TODO: adjust shadow for the button
		<button className={"relative h-9 w-11 drop-shadow-2xl bg-cautionBgL shadow-md shadow-cautionL rounded-md items-center mr-6"}>
			<img className={"h-6 w-6 inline-flex align-middle"}  alt={"notifications"} src={AlarmBellIcon}  />
			<span>
				<div className={"absolute -top-3 -right-3 h-6 w-6 rounded-full bg-warningL font-semibold text-white"}>2</div>
			</span>
		</button>
	)
}
