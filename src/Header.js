import logo from './Logo.svg'
import Nav from './Nav'

import BookingForm from './BookingForm'
import Home from './Home'
import ConfirmedBooking from './ConfirmedBooking'
import {Routes, Route, Link} from 'react-router-dom';

function Header(props){
    return(
        <>
        <header>
            <img id="logoimage" src={logo}/>
            <nav id="topnav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/booking" className="nav-item">Booking</Link>
            </nav>
        </header>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/booking" element={<BookingForm navigator = {props.navigator}/>}></Route>
            <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
        </Routes>
        </>

    )
}
export default Header;