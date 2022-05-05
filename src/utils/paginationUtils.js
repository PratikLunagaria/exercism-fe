const getLHS = (pageNo, firstPage) => {
	let LHS = [pageNo-2, pageNo-1].filter(v=> v >= firstPage);
	return LHS;
}

const getRHS = (pageNo, lastPage) => {
	let RHS = [pageNo+1, pageNo+2].filter(v => v <= lastPage);
	return RHS
}

export const pageNavNos = (currentPage, lastPage) => {
	const firstPage = 1;
	if(currentPage === firstPage){
		return [firstPage, ...getRHS(currentPage, lastPage), '>', lastPage];
	} else if(currentPage === lastPage){
		return [firstPage, '<', ...getLHS(currentPage, firstPage), lastPage ]
	} else {
		let pageWithNeighbours = [...getLHS(currentPage, firstPage), currentPage, ...getRHS(currentPage, lastPage)]
		if(!pageWithNeighbours.includes(firstPage)){
			pageWithNeighbours.unshift(firstPage,'<')
		}
		if(!pageWithNeighbours.includes(lastPage)){
			pageWithNeighbours.push('>',lastPage)
		}
		return pageWithNeighbours
	}
}
