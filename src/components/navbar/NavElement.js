import {GraphicIcon} from "./GraphicIcon";

export const NavElement = ({isActive, icon, title}) => {
    return(
	    <li className={isActive ? "mr-4":"text-inactiveL mr-4"}>
		    <a href={"/"} className={"flex p-1 items-center  h-12"} >
			    <GraphicIcon src={icon} alt={title} isActive={isActive}/>
			    <span>{title}</span>
		    </a>
	    </li>
    )
}
