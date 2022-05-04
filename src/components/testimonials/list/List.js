import {ListItem} from "./ListItem";

export const List = ({list}) =>{
	return(
		<div className={"flex flex-col grow overflow-y-auto min-h-[50vh]"}>
			{
				list.length ?
					list.map((testimonial)=><ListItem {...testimonial} key={`testimonial-${testimonial.id}`}/>)
					:
					<div>

					</div>
			}
		</div>
	)
}
