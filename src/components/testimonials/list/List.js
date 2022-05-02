import {ListItem} from "./ListItem";

export const List = ({list}) =>{
	return(
		<div className={"flex flex-col grow overflow-y-auto"}>
			{list.map((testimonial)=><ListItem {...testimonial}/>) }
		</div>
	)
}
