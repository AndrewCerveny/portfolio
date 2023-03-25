import React from "react";
import './Navbar.css';
import ghicon from '../Images/github.svg'
import lkicon from '../Images/linkedin.svg'

const Navbar = () => {
  return(
    <section className="navbar">
      <div className="link-cont">
        <h2> About </h2>
        <h2> Skills & Tools </h2>
        <h2> Projects </h2>
        <h2> Contact </h2>
      </div>
      <section className="externals">
        <div className="nav-icons">
          <img src={ghicon} alt='github icon' className="n-icons"/>
        </div>
          <div className="nav-icons">
          <img src={lkicon} alt='linkedin icon'className="n-icons"/>
        </div>
      </section>
    </section>
    
  )
}
export default Navbar 