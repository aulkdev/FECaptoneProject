import logo from './Logo.svg'
import Nav from './Nav'

import Main from './Main'
import Home from './Home'
import {Routes, Route, Link} from 'react-router-dom';

function Header(){
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
            <Route path="/" element={<Home/>}></Route>
            <Route path="/booking" element={<Main/>}></Route>
        </Routes>
        </>

    )
}
export default Header;