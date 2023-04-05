import React,{useState} from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import "./styles/App.scss";
import Services from "./components/Services"
import Contact from "./components/Contact";
import "./styles/mediascreen.scss"
import { Toaster } from "react-hot-toast";
import Navitem from "./components/Navitem";
import Footer from "./components/Footer";

function App() {

  const [display,setdisplay]=useState(true);

  return (
  <>
 { <Navitem display={display} setdisplay={setdisplay}/>}
  <Header setdisplay={setdisplay}  />
  <Home />
  <Project/>
  <Services/>
  <About/>
  <Contact/>
  <Footer/>
  <Toaster/>
  </>
  );
}

export default App;
