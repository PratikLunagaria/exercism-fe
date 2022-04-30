export const PaginationBtn = ({ isActive, isDisabled, icon, title, isIconLeft, isNum  }) => {
	if(title === '-'){
		return (
			<div className={`flex p-2 mx-2 rounded-md items-center`}>
				<div className={"mx-2 text-sm"}>...</div>
			</div>
		)
	}
	return (
		<button className={`flex ${isNum ? 'p-2 mx-2':'px-4 py-2'} rounded-md items-center ${isIconLeft ? '':'flex-row-reverse'} ${isDisabled ? "bg-listBorderL" : isActive ? "border-2 border-purple-600 bg-listBorderL" : "border-2 border-listBorderL"}`}>
			{icon && <img className={"h-2.5 w-2.5"} alt={"pagination"} src={icon}/>}
			<div className={"mx-2 text-sm"}>{title}</div>
		</button>
	)
}
