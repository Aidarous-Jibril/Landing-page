import React from 'react'
import './Banner.css'
import { images } from '../../constants';
import SubHeading from '../subheading/SubHeading';

const Banner = () => {
  return (
    <header className='header' id='home'>

      <div className='app__banner  section__padding' id='home' >
        <div className="app__banner-img">
          <img src={images.pexels} alt="header_img" />
        </div>
        
        <div className="app__banner-info">
          <SubHeading title="Mat för att få dig på gott humör" />
          <h1>The Secret Of The Dining</h1>  
          <p className="p__opensans" style={{ margin: '2rem 0', color: 'white'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <button type="button" className="custom__button">Utforska Menyn</button>
        </div>   
      </div>
    </header>
  )
}

export default Banner
