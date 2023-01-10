import Button from "./components/Button";
import restimage from './images/restaurant.jpg'
import saladimage from './images/greek salad.jpg'
import lemonimage from './images/lemon dessert.jpg'
import baguette from './images/baguette.jpg'
import FoodCard from "./components/FoodCard";
import Testamonial from "./components/Testamonial";
import Main from "./BookingForm";
import {Routes, Route, Link} from 'react-router-dom';
import './Home.css'
const Home = (props) => {
    return (
        <>
            <section className="herosection">
                <h1>Litte Lemon</h1>
                <p>Hi, we are little lemon, the local restaurant where you can eat the best things in town</p>
                <Link to="/booking" className="nav-item"><Button row="3" col="2"inputname="Reserve a Table"/></Link>
                <img src={restimage}/>
            </section>
            <section className="highlightsection">
                <h2>Highlights</h2>
                <Button row="1" col="4"inputname="Full Menu"/>
                <FoodCard img={baguette} name="Baguette" desc ="The classic food to eat at Little Lemon"/>
                <FoodCard img={saladimage} name="Greek Salad" desc ="A refreshing and nutricious appetizer"/>
                <FoodCard img={lemonimage} name="Lemon Dessert" desc ="A sweet and sour perfect ending"/>
            </section>
            <section className="testamonialsection">
                <Testamonial name="Anon" review="Amazing Food!"/>
                <Testamonial name="Karla" review="The salad was very refreshing"/>
                <Testamonial name="Marz" review="Never before tasted anything like the lemon dessert"/>
                <Testamonial name="Jenny" review="10/10 will come again"/>

            </section>
            <section className="aboutsection">
                <img src={restimage}/>
                <p>A family tradition restaurant since 1968, making people smile and creating the best food creations!</p>
            </section>
        </>
    )

}
export default Home;