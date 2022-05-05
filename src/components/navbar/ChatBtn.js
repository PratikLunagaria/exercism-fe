import {ChatIcon, RedDotIcon} from "../../assets/navbar"
import {GraphicIcon} from "./GraphicIcon";
export const ChatBtn = () => {
	return(
		<button className={"relative mr-2"}>
			<GraphicIcon src={ChatIcon} alt={"chat"}/>
			<span className={"border-white"}>
				<img src={RedDotIcon} alt={"new chat"} className={"border-4 absolute -top-2 right-2.5 h-4 w-4 rounded-full border-white "}/>
			</span>
		</button>
	)
}
