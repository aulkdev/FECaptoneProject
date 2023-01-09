import './Input.css'
function Input(props){
    return(
        <div className="textinputclass">
            <label className="inputlabel" for={props.inputname}>{props.inputname}</label>
            <input className="textinput" type="text" id={props.inputname}></input>
        </div>
    )
}
export default Input;