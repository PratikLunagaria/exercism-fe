import {PaginationBtn} from "./PaginationBtn";
import {ArrowLeftIcon, ArrowRightIcon} from "../../../assets/testimonials";
import {PaginationNav} from "./PaginationNav";

export const ListFooter = ({ pagination, listParams, setListParams }) => {
	const handlePageNav = (selectedPageNo) => setListParams({...listParams, page: selectedPageNo})
	return (
		<div className={"flex rounded-b-xl border-2 p-4 justify-between "}>
			<PaginationBtn isDisabled={listParams.page === 1} title={"Previous"} icon={ArrowLeftIcon} isIconLeft onClick={()=>{handlePageNav(listParams.page - 1)}}/>
			<PaginationNav {...{pagination, handlePageNav}}/>
			<PaginationBtn isDisabled={listParams.page === pagination.total_pages} title={"Next"} icon={ArrowRightIcon} onClick={()=>{handlePageNav(listParams.page + 1)}}/>
		</div>
	)
}
