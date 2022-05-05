import {HexagonIcon, RedDotIcon} from "../../assets/navbar"
import {GraphicIcon} from "./GraphicIcon";
export const HexBtn = () => {
	return(
		<button className={"relative mr-2"}>
			<GraphicIcon src={HexagonIcon} alt={"hex"}/>
			<span className={"border-white"}>
				<img src={RedDotIcon} alt={"new hex"} className={"border-4 absolute -top-2 right-2.5 h-4 w-4 rounded-full border-white "}/>
			</span>
		</button>
	)
}
