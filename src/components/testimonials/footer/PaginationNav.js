import {PaginationBtn} from "./PaginationBtn";
import {pageNavNos} from "../../../utils";

export const PaginationNav = ({ current_page, total_pages }) => {
	let pageNosList = pageNavNos(current_page, total_pages);
	return (
		<div className={"flex flex-1 grow items-center justify-center"}>
			{pageNosList.map((pageNo)=> <PaginationBtn isActive={pageNo===current_page} title={pageNo} isNum/>)}
		</div>
	)
}
