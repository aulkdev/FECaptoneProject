import './Input.css'
import {useState} from 'react';
function Input(props){
    const[inputvalue, setInputvalue] = useState("")

    return(
        <div className={"textinputclass " + "my"+props.row+props.col+"grid"}>
            <label className="inputlabel" htmlFor={props.inputname}>{props.inputname}</label>
            <input className="textinput" placeholder={"enter "+props.inputname}type={props.inputtype} id={props.inputname} value={inputvalue} onChange={(e) => {
                props.setter({type:props.inputname, value:e.target.value})
                setInputvalue(e.target.value)
            }}/>
        </div>
    )
}
export default Input;