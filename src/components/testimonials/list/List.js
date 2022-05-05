import {ListItem} from "./ListItem";
import {LoadingCircleIcon} from "../../../assets/testimonials";

export const List = ({list}) =>{
	return(
		<div className={"flex flex-col grow overflow-y-auto min-h-[50vh]"}>
			{
				list.length  ?
					list.map((testimonial)=><ListItem {...testimonial} key={`testimonial-${testimonial.id}`}/>)
					:
					<div className={"flex min-h-[50vh] items-center justify-center"}>
						<img
							className={"animate-spin h-12 w-12"}
							alt={"Loading..."}
							src={LoadingCircleIcon}
						/>
					</div>
			}
		</div>
	)
}
