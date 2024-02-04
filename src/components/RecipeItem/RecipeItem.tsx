
interface RecipeItemProp{
    className?:string,
    titleText?:string,
    text:string
}
const RecipeItem = ({className,titleText,text}:RecipeItemProp) => {
    return ( <div className={className}>
        <h3>{titleText}</h3>
        <p>{text}</p>
        
    </div> );
}
 
export default RecipeItem;