import {useState} from 'react';
const DatePickElement = (props) => {

    return (
        <label htmlFor={props.title + ", " +props.subtitle}>
            <div className="datepickelement" >
                <h4>{props.title}</h4>
                <h5>{props.subtitle}</h5>
            </div>

        </label>

    )

}

export default DatePickElement;