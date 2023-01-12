import logo from './Logo.svg'
import LinkList from './components/LinkList';
import './Footer.css'
function Footer(){
    return(
        <footer>
            <img id="logoimage" src={logo}/>
            <LinkList title="Social Links" links={[["Facebook","facebook"],["Twitter","twitter"],["Instagram","instagram"],["Trip Advisor","tripadvisor"]]}/>
            <LinkList title="Further Links" links={[["Privacy Policy","privacy"],["Imprint","imprint"],["Contact","contact"]]}/>
        </footer>
    )
}
export default Footer;