import {GraphicIcon} from "./GraphicIcon";

export const NavElement = ({isActive, icon, title}) => {
    return(
	    <li className={isActive ? "lg:mx-4":"text-inactiveL mx-4"}>
		    <a href={"/"} className={"flex p-1 items-center h-12"} >
			    <GraphicIcon src={icon} alt={title} isActive={isActive}/>
			    <span className={"hidden text-sm md:block lg:text-lg"}>{title}</span>
		    </a>
	    </li>
    )
}
