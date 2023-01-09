import logo from './Logo.svg'
import Nav from './Nav'

function Header(){
    return(
        <header>
            <img id="logoimage" src={logo}/>
            <Nav/>
        </header>
    )
}
export default Header;