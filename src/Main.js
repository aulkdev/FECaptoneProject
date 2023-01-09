import './Main.css';
import Input from './components/Input'

function Main(){
    return(
        <main>
            <div id="form">
                <h1>Reserve a Table</h1>
                <Input inputname="Name"/>
                <Input inputname="Email"/>
            </div>
        </main>
    )
}
export default Main;