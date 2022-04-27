import {NavMenuVerticalIcon } from "../../assets/navbar"
export const ProfileBtn = () => {
	return(
		<button className={"h-9 items-center flex"}>
			<img className={"h-9 w-9 inline-flex rounded-full align-middle"}  alt={"reputation"} src={"https://avatars3.githubusercontent.com/u/135246"}  />
			<img className={"ml-2 h-6 w-6 inline-flex align-middle"}  alt={"Profile menu"} src={NavMenuVerticalIcon}  />
		</button>
	)
}
