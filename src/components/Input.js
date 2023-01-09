import './Input.css'
function Input(props){
    return(
        <div className={"textinputclass " + "my"+props.row+props.col+"grid"}>
            <label className="inputlabel" htmlFor={props.inputname}>{props.inputname}</label>
            <input className="textinput" type="text" id={props.inputname}></input>
        </div>
    )
}
export default Input;