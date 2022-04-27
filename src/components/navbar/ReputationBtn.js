import {GoldenBadgeIcon } from "../../assets/navbar"
export const ReputationBtn = () => {
	return(
		<button className={"h-9 w-24 p-2 border-2 border-gradient-br-pink-purple border-transparent rounded-full items-center flex mr-6"}>
			<img className={"h-6 w-6 inline-flex align-middle"}  alt={"reputation"} src={GoldenBadgeIcon}  />
			<div className={"ml-2 text-white font-semibold"}>300K</div>
		</button>
	)
}
