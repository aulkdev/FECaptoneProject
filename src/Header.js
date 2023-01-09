import logo from './Logo.svg'
import Nav from './Nav'

function Header(){
    return(
        <header>
            <img src={logo}/>
            <Nav/>
        </header>
    )
}
export default Header;