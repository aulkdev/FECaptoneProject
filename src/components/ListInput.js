import './Input.css'
import {useState} from 'react';
function ListInput(props){
    const [sel, setSel] = useState(props.items[0]);
    return(
        <div className={"textinputclass " + "my"+props.row+props.col+"grid"}>
            <label className="inputlabel" htmlFor={props.inputname}>{props.inputname}</label>
            <select value={sel} onChange={(e) => {
                props.setter({type:props.inputname, value:e.target.value})
                setSel(e.target.value)
                }}className="textinput" name={props.inputname} id={props.inputname}  >
                {
                    props.items.map(i => (
                        <option value={i}>{i}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default ListInput;