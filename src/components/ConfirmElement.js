import './ConfirmElement.css'
import {useState} from 'react';
const ConfirmElement = (props) => {
    const [confirm, setConfirm] = useState(false)
    const handleClick = () => {
        setConfirm(!confirm)
        props.setter({type: "Confirm", value:confirm})
    }

    return (
        <div className="confirmelement">
            <input type="checkbox" id={props.inputname} name={props.inputname} value={confirm} onClick={handleClick}/>
            <label htmlFor={props.inputname}>{props.message}</label>
        </div>
    )
}
export default ConfirmElement;