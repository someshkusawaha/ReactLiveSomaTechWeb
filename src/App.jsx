import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () => {
return (
    <>
<Navbar/>
<Switch>
    <Route path="/home" component={Home}/>
    <Route path="/service" component={Service}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Redirect path="/home"/>
</Switch>
<Footer/>
</>
    );
}

export default App;