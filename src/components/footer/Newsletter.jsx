import React from 'react'
import SubHeading from '../subheading/SubHeading'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading title="Nyhetsbrev" />
            <h1 className="headtext__cormorant">prenumerera på vårt nyhetsbrev</h1>
            <p className="p__opensans">Och missa aldrig de senaste uppdateringarna!</p>
        </div>
        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder="Enter your email address" />
            <button type="button" className="custom__button">Prenumerera</button>
        </div>
  </div>
  )
}

export default Newsletter