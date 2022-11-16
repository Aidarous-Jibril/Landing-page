import React from 'react'
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="section__padding app__aboutus" id='about'>

        <div className="aboutus__container  ">
          <div className="aboutus__container-about">
          <h1 className="headtext__cormorant">Om Oss</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type="button" className="custom__button">Veta Mer</button>
        </div>

        <div className="aboutus__container-knife">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="aboutus__container-history">
          <h1 className="headtext__cormorant">Vår Historia</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button type="button" className="custom__button">Veta Mer</button>
        </div>
      </div>
    </div>

  )
}

export default AboutUs