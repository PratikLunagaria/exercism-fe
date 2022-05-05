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
		<header className={"border-b-2 border-borderL"}>
			<div className={"flex items-center p-2 mx-9"}>
				<a href={"/"}>
					<img src={LogoIcon} alt={"exercism"}/>
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
					<div className={"hidden items-center xl:flex"}>
						<ChatBtn/>
						<HexBtn/>
						<NotificationBtn/>
						<ReputationBtn/>
					</div>
					<ProfileBtn/>
				</div>
			</div>
		</header>
	)
}
