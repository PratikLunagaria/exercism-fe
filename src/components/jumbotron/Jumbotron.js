import {HeaderBadgeIcon, HeaderPatternIcon} from "../../assets/header";

export const Jumbotron = () => {
    return(
		<div className={"flex flex-col items-center place-content-center m-9"}>
			<img className={"ml-2 h-16 w-16 inline-flex align-middle"}  alt={"Profile menu"} src={HeaderBadgeIcon}  />
			<div className={"inline-flex items-center p-4"}>
				<h1 className={"text-3xl font-extrabold"}> Testimonials I've left </h1>
				<h3 className={"rounded-full border-2 border-borderL py-0.5 px-2 ml-4"}> 47 </h3>
			</div>
			<img className={"ml-2 h-5 w-20 inline-flex align-middle"}  alt={"Profile menu"} src={HeaderPatternIcon}  />
		</div>
    )
}
