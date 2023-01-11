import './ConfirmElement.css'
import {useState} from 'react';
const ConfirmElement = (props) => {
    const [confirm, setConfirm] = useState(true)
    const handleClick = () => {
        setConfirm(!confirm)
        console.log(confirm)
        props.setter({type: "Confirm", value: confirm})
    }

    return (
        <div className="confirmelement">
            <input type="checkbox" id={props.inputname} name={props.inputname} value={confirm} onClick={handleClick}/>
            <label htmlFor={props.inputname}>{props.message}
            {
                props.errors[props.inputname]!==""?(
                    <p className="error">{props.errors[props.inputname]}</p>
                ):(
                    <></>
                )
            }
            </label>
        </div>
    )
}
export default ConfirmElement;