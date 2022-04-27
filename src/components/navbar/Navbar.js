import { ContributeIcon, DashboardIcon, LogoIcon, MentoringIcon, TracksIcon} from '../../assets/navbar'
import {NavElement} from "./NavElement";
import {ChatBtn} from "./ChatBtn";
import {HexBtn} from "./HexBtn";
import {NotificationBtn} from "./NotificationBtn";
import {ReputationBtn} from "./ReputationBtn";
import {ProfileBtn} from "./ProfileBtn";

const navElements = [
	{"title": "Dashboard", "icon": DashboardIcon, "isActive": true},
	{"title": "Tracks", "icon": TracksIcon, "isActive": false},
	{"title": "Mentoring", "icon": MentoringIcon, "isActive": false},
	{"title": "Contribute", "icon": ContributeIcon, "isActive": false}
]



export const Navbar = () => {
	return (
		<div className={"flex items-center p-2 border-b-2 border-borderL"}>
			<a href={"/"} className={"mx-8"}>
				<img src={LogoIcon} alt={"exercism"} />
			</a>
			<nav className={"flex flex-1"}>
				<ul className={"flex items-center font-semibold"}>
					{
						navElements.map((navElement)=>
							<NavElement {...navElement} key={navElement.title} />
						)
					}
				</ul>
			</nav>
			<div className={"flex items-center justify-end order-last"}>
				<ChatBtn/>
				<HexBtn/>
				<NotificationBtn/>
				<ReputationBtn/>
				<ProfileBtn/>
			</div>
		</div>
	)
}
