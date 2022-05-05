import {PaginationBtn} from "./PaginationBtn";
import {pageNavNos} from "../../../utils";

export const PaginationNav = ({ pagination: {current_page, total_pages}, handlePageNav }) => {
	let pageNosList = pageNavNos(current_page, total_pages);
	return (
		<div className={"flex flex-1 grow items-center justify-center"}>
			{pageNosList.map((pageNo)=>
				<PaginationBtn
					key={`page-${pageNo}`}
					isActive={pageNo===current_page}
					title={pageNo}
					isNum
					onClick={()=> {
						handlePageNav(pageNo)
					}}
				/>)}
		</div>
	)
}
