import './Input.css'
import {useState} from 'react';
function ListInput(props){
    const [sel, setSel] = useState("");
    return(
        <div className={"textinputclass " + "my"+props.row+props.col+"grid"}>
            <label className="inputlabel" htmlFor={props.inputname}>{props.inputname}
            {
                props.errors[props.inputname]!==""?(
                    <p className="error">{props.errors[props.inputname]}</p>
                ):(
                    <></>
                )
            }
            </label>
            <select value={sel} onChange={(e) => {
                props.setter({type:props.inputname, value:e.target.value})
                setSel(e.target.value)
                }}className="textinput" name={props.inputname} id={props.inputname}>
                <option key={0}value={""} disabled hidden>Select {props.inputname}</option>
                {
                    props.items.map(i => (
                        <option key={i}value={i}>{i}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default ListInput;