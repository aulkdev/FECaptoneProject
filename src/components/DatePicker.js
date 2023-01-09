import DatePickElement from "./DatePickElement";
import './DatePicker.css'

function DatePicker(props){
    return(
        <div className="fulldatepicker">
            <h1>Date</h1>
                    <div className="datepicker">
            {props.items.map(i => (
                <DatePickElement title={i[0]} subtitle = {i[1]}/>
            ))
            }
        </div>

        </div>
    )
}
export default DatePicker;