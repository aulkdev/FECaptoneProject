import './BookingForm.css';
import Input from './components/Input'
import ListInput from './components/ListInput'
import DatePicker from './components/DatePicker';
import ConfirmElement from './components/ConfirmElement';
import Button from './components/Button';
import {useState, useReducer, useEffect} from 'react';
import {fetchAPI, submitAPI} from './components/api'
import {Link} from 'react-router-dom';
// import { useFormik } from "formik";
// import * as Yup from 'yup';

function BookingForm(props){
    let monthlookup = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let daylookup = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let dates = []
    let curDate = new Date("Jan 9")
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
        }else if(action.type==="Confirm"){
            return {...state, confirmed:action.value}
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer,
        {name:"",email:"",date:"",time:"",people:"",confirmed:false}
    )

    const errorreducer = (state,action) => {
       //console.log(state)
        if (action.type==="Name"){
            return {...state, Name: action.error}
        }else if(action.type==="Email"){
            return {...state, Email:action.error}
        }else if(action.type==="DatePicker"){
            return {...state, DatePicker:action.error}
        }else if(action.type==="Time"){
            return {...state, Time:action.error}
        }else if(action.type==="People"){
            return {...state, People:action.error}
        }else if(action.type==="agreement"){
            return {...state, agreement:action.error}
        }
        return state

    }
    const [errorstate, errordispatch] = useReducer(errorreducer,
        {Name:"",Email:"",DatePicker:"",Time:"",People:"",agreement:""}
    )

    const getTimes = () => {
        if (chosendate === ""){
            return []
        }else{
            const result = fetchAPI(new Date(chosendate.split(',')[1]))
            //console.log(result)
            return result
        }
        // if (chosendate === ""){
        //     return []
        // }
        // if (["SUN","MON","TUE"].includes(chosendate.split(',')[0])){
        //     return ["12pm","1pm","2pm","3pm","4pm"]
        // }else{
        //     return ["2pm","3pm","4pm","5pm","6pm"]
        // }
    }
    const handleClick = (e) => {
        e.preventDefault()
        //console.log(state)
        let allok = true
        if (state.name ===""){
            errordispatch({type:'Name', error:'*Please enter a name'})
            allok = false
        }else{
            errordispatch({type:'Name',error:''})
        }

        if (state.email ===""){
            errordispatch({type:'Email', error:'*Please enter an email'})
            allok = false
        }else if(!state.email.match(/^\S+@\S+$/)){
            errordispatch({type:'Email', error:'*Please enter a correct email'})
            allok = false
        }
        else{
            console.log(state.email.match(/^\S+@\S+$/))
            errordispatch({type:'Email',error:''})
        }

        if (state.date ===""){
            errordispatch({type:'DatePicker', error:'*Please select a date'})
            allok = false
        }else{
            errordispatch({type:'DatePicker',error:''})
        }

        if (state.time ===""){
            errordispatch({type:'Time', error:'*Please select a time'})
            allok = false
        }else{
            errordispatch({type:'Time',error:''})
        }

        if (state.people ===""){
            errordispatch({type:'People', error:'*Please select a time'})
            allok = false
        }else{
            errordispatch({type:'People',error:''})
        }

        if (!state.confirmed){
            errordispatch({type:'agreement', error:'*Please confirm'})
            allok = false
        }else{
            errordispatch({type:'agreement',error:''})
        }
        if(allok && submitAPI(state)){
            props.navigator("/confirmed-booking", {state:{details: state}})
        }
    }

    // const formik = useFormik({
    //     initialValues:state,
    //     onSubmit: handleClick,
    //     validationSchema: Yup.object(
    //         {name: Yup.string().required("Please add your name"),
    //         email:Yup.string().required("Please add your email"),
    //         date:Yup.string().required("Please choose a date"),
    //         time:Yup.string().required("Please choose a time"),
    //         people:Yup.string().required("Please choose the amount of people"),
    //         confirmed:Yup.bool().oneOf([true], 'Field must be checked')
    //     }
    //     )
    // })


    return(
        <main>
            <form id="form">
                <h1>Reserve a Table</h1>
                <Link to="/" className="nav-item"><Button row="1" col="2"inputname="Cancel"/></Link>
                <Input inputname="Name" inputtype="text" row="2" col="1" errors ={errorstate} setter={dispatch} id="name"/>
                <Input inputname="Email" inputtype="email"row="2" col="2" errors = {errorstate} setter={dispatch}/>
                <ListInput inputname="Time" items={getTimes()} row="4" col="1" errors ={errorstate}  setter={dispatch}/>
                <ListInput inputname="People" items={[1,2,3,4,5]} row="4" col="2" errors ={errorstate}  setter={dispatch}/>
                <DatePicker inputname="DatePicker"items={dates} liftDate = {setChosendate} errors ={errorstate}  setter={dispatch}/>
                <ConfirmElement inputname="agreement" message="Click to confirm that you have read the confirmation agreement*" row="5" col="1" errors ={errorstate}  setter={dispatch}/>
                <input type="submit" value="Confirm Reservation" id="formbutton"onClick={handleClick}/>
            </form>
        </main>
    )
}
export default BookingForm;