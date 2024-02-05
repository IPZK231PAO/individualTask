const RecipeItem = ({ className, titleText, text }) => {
	return (
		<div className={className}>
			<h3>{titleText}</h3>
			<p>{text}</p>
		</div>
	)
}

export default RecipeItem
