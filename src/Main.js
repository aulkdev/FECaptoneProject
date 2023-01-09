import './Main.css';
import Input from './components/Input'
import ListInput from './components/ListInput'
import DatePicker from './components/DatePicker';
import ConfirmElement from './components/ConfirmElement';
import Button from './components/Button';

function Main(){
    let monthlookup = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let daylookup = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let dates = []
    let curDate = new Date()
    for (let i = 0; i<7;i++){
        dates.push([daylookup[curDate.getDay()],`${monthlookup[curDate.getMonth()]} ${curDate.getDate()}`])
        curDate.setDate(curDate.getDate()+1)
    }
    return(
        <main>
            <div id="form">
                <h1>Reserve a Table</h1>
                <Input inputname="Name" row="2" col="1"/>
                <Input inputname="Email" row="2" col="2"/>
                <ListInput inputname="Time" items={["12pm","1pm","2pm","3pm","4pm"]} row="4" col="1"/>
                <ListInput inputname="People" items={[1,2,3,4,5]} row="4" col="2"/>
                <DatePicker items={dates}/>
                <ConfirmElement inputname="agreement" message="Click to confirm that you have read the confirmation agreement*" row="5" col="1"/>
                <Button inputname="Confirm Reservation" row="6" col="1"/>
            </div>
        </main>
    )
}
export default Main;