import {PaginationBtn} from "./PaginationBtn";
import {ArrowLeftIcon, ArrowRightIcon} from "../../../assets/testimonials";
import {PaginationNav} from "./PaginationNav";
import {testimonialsList} from "../../../mock";

export const ListFooter = () => {
	return (
		<div className={"flex rounded-b-xl border-2 p-4 justify-between"}>
			<PaginationBtn isDisabled title={"Previous"} icon={ArrowLeftIcon} isIconLeft/>
			<PaginationNav {...testimonialsList.testimonials.pagination}/>
			<PaginationBtn title={"Next"} icon={ArrowRightIcon}/>
		</div>
	)
}
