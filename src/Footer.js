import logo from './Logo.svg'
import LinkList from './components/LinkList';
import './Footer.css'
function Footer(){
    return(
        <footer>
            <img id="logoimage" src={logo}/>
            <LinkList title="Social Links" links={[["Facebook","facebook.com"],["Twitter","twitter.com"],["Instagram","instagram.com"],["Trip Advisor","tripadvisor.com"]]}/>
            <LinkList title="Further Links" links={[["Privacy Policy","facebook.com"],["Imprint","twitter.com"],["Contact","instagram.com"]]}/>
        </footer>
    )
}
export default Footer;