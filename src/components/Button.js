import './Button.css'
const Button = (props) => {
    return (
        <button className={"button " + "my"+props.row+props.col+"grid"} >{props.inputname}</button>
    )

}
export default Button;