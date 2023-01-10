import Main from './BookingForm'
import Home from './Home'
import {Routes, Route, Link} from 'react-router-dom';
function Nav(){
    return(
        <>
                <nav id="topnav">
            {/*             <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reserve">Reserve</a></li>
            </ul> */}
            <Link to="/" className="nav-item">Homepage</Link>
                    <Link to="/booking" className="nav-item">Booking</Link>
        </nav>
        <Routes> 
                <Route path="/" element={<Home/>}></Route>
                <Route path="/booking" element={<Main/>}></Route>
            </Routes>
        </>
    )
}
export default Nav;