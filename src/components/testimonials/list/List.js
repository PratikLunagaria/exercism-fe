import {ListItem} from "./ListItem";
import {testimonialsList} from "../../../mock";

export const List = () =>{
	return(
		<div className={"flex flex-col grow overflow-y-auto"}>
			{testimonialsList?.testimonials?.results.map((testimonial)=><ListItem {...testimonial}/>) }
		</div>
	)
}
