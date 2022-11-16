import React from 'react'
import './FindUs.css'
import SubHeading from '../subheading/SubHeading'
import { images } from '../../constants'

const FindUs = () => {
  return (
  
    <div className="app__findUs-container " id="contact">
      <div className="box findUs__info">
        <SubHeading title="kontakt info" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>besök oss</h1>
        <div >
          <p className="p__opensans" style={{color: '#fff'}}>storgatan 1, 12345, Linköping</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>öppettider</p>
          <p className="p__opensans" style={{color: '#fff'}}>Mån - Fred: 10:00 - 22:00 </p>
          <p className="p__opensans" style={{color: '#fff'}}>Lör - Sön: 10:00  - 03:00 </p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>

      <div className="box findUs__img">
      <img src={images.findus} alt="finus_img" />
      </div>      
    </div>
  )
}

export default FindUs