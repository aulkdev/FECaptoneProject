import './BookingForm.css';
import Input from './components/Input'
import ListInput from './components/ListInput'
import DatePicker from './components/DatePicker';
import ConfirmElement from './components/ConfirmElement';
import Button from './components/Button';
import {useState, useReducer, useEffect} from 'react';

function BookingForm(){
    let monthlookup = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let daylookup = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let dates = []
    let curDate = new Date()
    for (let i = 0; i<7;i++){
        dates.push([daylookup[curDate.getDay()],`${monthlookup[curDate.getMonth()]} ${curDate.getDate()}`])
        curDate.setDate(curDate.getDate()+1)
    }
    const [chosendate, setChosendate] = useState("");

    const reducer = (state, action) => {
        //console.log(state)
        //console.log(action)
        if (action.type==="Name"){
            return {...state, name:action.value}
        }else if(action.type==="Email"){
            return {...state, email:action.value}
        }else if(action.type==="DatePicker"){
            return {...state, date:action.value}
        }else if(action.type==="Time"){
            return {...state, time:action.value}
        }else if(action.type==="People"){
            return {...state, people:action.value}
        }else if(action.type==="confirmed"){
            return {...state, confirmed:action.value}
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer,
        {name:"",email:"",date:"",time:"",people:"",confirmed:false}
    )

    const getTimes = () => {
        if (chosendate === ""){
            return []
        }
        if (["SUN","MON","TUE"].includes(chosendate.split(',')[0])){
            return ["12pm","1pm","2pm","3pm","4pm"]
        }else{
            return ["2pm","3pm","4pm","5pm","6pm"]
        }
    }
    const handleClick = (e) => {
        e.preventDefault()
        console.log(state)
    }


    return(
        <main>
            <form id="form">
                <h1>Reserve a Table</h1>
                <Input inputname="Name" inputtype="text" row="2" col="1" setter={dispatch}/>
                <Input inputname="Email" inputtype="email"row="2" col="2"setter={dispatch}/>
                <ListInput inputname="Time" items={getTimes()} row="4" col="1" setter={dispatch}/>
                <ListInput inputname="People" items={[1,2,3,4,5]} row="4" col="2" setter={dispatch}/>
                <DatePicker items={dates} liftDate = {setChosendate}setter={dispatch}/>
                <ConfirmElement inputname="agreement" message="Click to confirm that you have read the confirmation agreement*" row="5" col="1" setter={dispatch}/>
                <input type="submit" value="Confirm Reservation" id="formbutton"onClick={handleClick}/>
            </form>
        </main>
    )
}
export default BookingForm;