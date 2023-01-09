import './ConfirmElement.css'
const ConfirmElement = (props) => {
    return (
        <div className="confirmelement">
            <input type="checkbox" id={props.inputname} name={props.inputname} value={props.inputname}/>
            <label htmlFor={props.inputname}>{props.message}</label>
        </div>
    )
}
export default ConfirmElement;