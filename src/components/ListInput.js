import './Input.css'
function ListInput(props){
    return(
        <div className={"textinputclass " + "my"+props.row+props.col+"grid"}>
            <label className="inputlabel" htmlFor={props.inputname}>{props.inputname}</label>
            <select className="textinput"name={props.inputname} id={props.inputname}>
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