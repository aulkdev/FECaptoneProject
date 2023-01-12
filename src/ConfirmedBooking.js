import { useLocation} from 'react-router-dom';
import './ConfirmedBooking.css'
const ConfirmedBooking = (props) => {
    const { state } = useLocation();
    console.log(state);
    return(
        <div className="confirmpage">
        <h1>Confirmed, we look forward to seeing you soon!</h1>
        <h2>Name: {state.details.name}</h2>
        <h2>Email: {state.details.email}</h2>
        <h2>People: {state.details.people}</h2>
        <h2>Date: {state.details.date}</h2>
        <h2>Time: {state.details.time}</h2>
        </div>
    )
}
export default ConfirmedBooking;
