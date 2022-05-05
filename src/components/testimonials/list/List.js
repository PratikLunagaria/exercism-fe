import {ListItem} from "./ListItem";
import {LoadingCircleIcon} from "../../../assets/testimonials";

export const List = ({filteredList, loading}) =>{
	return(
		<div className={"flex flex-col grow overflow-y-auto min-h-[50vh]"}>
			{
				filteredList.length  ?
					filteredList.map((testimonial)=><ListItem {...testimonial} key={`testimonial-${testimonial.id}`}/>)
					:
					<div className={"flex min-h-[50vh] items-center justify-center"}>
						{
							loading?
								<img
									className={"animate-spin h-12 w-12"}
									alt={"Loading..."}
									src={LoadingCircleIcon}
								/>
								:
								<div className={"p-4"}> Uh oh! no testimonials found, remove the text and press enter to load the testimonials!</div>
						}
					</div>
			}
		</div>
	)
}
