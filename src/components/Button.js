import './Button.css'
const Button = (props) => {
    return (
        <button aria-label="On Click" className={"button " + "my"+props.row+props.col+"grid"} style={{gridArea:props.row +"/"+props.col+"/"+props.row +"/"+props.col}}>{props.inputname}</button>
    )

}
export default Button;