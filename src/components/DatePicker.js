import DatePickElement from "./DatePickElement";
import './DatePicker.css'
import {useState} from 'react';

function DatePicker(props){
    const [date,setDate] = useState("")

    const onClick = (e) =>{
        setDate(e.target.value)
        props.liftDate(e.target.value)
        props.setter({type: "DatePicker", value:e.target.value})
    }

    return(
        <div className="fulldatepicker">
            <h1>Date: {date}</h1>
            <div className="datepicker">
                {props.items.map(i => (
                <div className="datepickelement">
                <input type="radio" className="datepickinput"id={i[1]} name="DatePicker" value={i[0]+", "+i[1]} onChange={onClick}/>
                <DatePickElement title={i[0]} subtitle = {i[1]} onClick={onClick}/>
                </div>
            ))
            }
        </div>

        </div>
    )
}
export default DatePicker;