import React from "react";
import './Welcome.css'
import headShot from '../Images/headShot.jpeg'

const Welcome = () => {


  return(
    <section className="welcome">
      <section className="intro">
        <h1> Welcome, </h1>
        <h2> I'm Andrew Cerveny </h2>
      </section>
      <section className="image-area">
        <img src={headShot} alt='headshot of Andrew Cerveny' className="profile-pic"/>
      </section>
    </section>
  )
}
export default Welcome;