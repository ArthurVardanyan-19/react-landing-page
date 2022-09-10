import "./CustomButton.css";

const CustomButton = ({value, bgColor, color, withoutShadow}) => {
    return(
        <button 
           className={withoutShadow ? 'white' : "customButton"} 
           style ={{background: bgColor, color: color}}>
           {value}
        </button>
    ) 
}

export default CustomButton;