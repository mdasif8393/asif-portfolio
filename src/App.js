import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import FancyBikes from "./components/FancyBikes/FancyBikes";
import Home from "./components/Home/Home";
import TravellingIsFun from "./components/TravellingIsFun/TravellingIsFun";
import DoctorsOfKhulnaCity from "./components/DoctorsOfKhulnaCity/DoctorsOfKhulnaCity";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      <Switch>


        <Route path="/home">
          <Home></Home>
        </Route>


        <Route exact path="/">
          <Home></Home>
        </Route>  

        <Route path="/fancy-bikes">
          <FancyBikes></FancyBikes>
        </Route>

        <Route path="/travelling-is-fun">
          <TravellingIsFun></TravellingIsFun>
        </Route>

        <Route path="/doctors-of-khulna-city">
          <DoctorsOfKhulnaCity></DoctorsOfKhulnaCity>
        </Route>

      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
