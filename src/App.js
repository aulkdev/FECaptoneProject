import './App.css';
import Header from './Header'
import Nav from './Nav'
import Main from './BookingForm'
import Footer from './Footer';
import Home from './Home';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
    <Header navigator = {navigate}/>
    <Footer/>
    </>
  );
}

export default App;
