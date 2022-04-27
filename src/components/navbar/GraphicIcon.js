export const GraphicIcon = ({ src, alt, isActive}) => {
	return(
		<img className={isActive ? "h-12 w-12 mr-4 inline-flex align-middle" : "h-6 w-6 mr-4 inline-flex align-middle"}  alt={alt} src={src}  />
	)
}
