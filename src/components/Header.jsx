import React from 'react'
import "../styles/Header.scss";

const Header = ({ setdisplay }) => {

  function handleburger() {
    setdisplay(prev => !prev)
  }


  return (
    <div className="header">
      <nav>
        <h1> <a href="#Home">Portfolio</a> </h1>
        <div className='headerlinks'>
          <a href="#Home">Home</a>
          <a href="#project">Projects</a>
          <a href="#services">services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div id='burger'>
          <i  onClick={handleburger} className="fa-solid fa-bars "></i>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Header

