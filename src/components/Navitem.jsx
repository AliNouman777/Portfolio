import React from 'react';
import "../styles/Header.scss"

const Navitem = ({ display, setdisplay }) => {

  function handnavbar() {
    setdisplay(prev => prev === false)
  }

  return (
    <div id={display ? "phone" : "phonenav"} className='phonenav'>
      <a id='home' onClick={handnavbar} href="#Home">Home</a>
      <a href="#project"
        onClick={handnavbar}
      >Projects</a>
      <a href="#services"
        onClick={handnavbar}
      >Services</a>
      <a href="#about"
        onClick={handnavbar}
      >About</a>
      <a href="#contact"
        onClick={handnavbar}
      >Contact</a>
    </div>
  )
}

export default Navitem
