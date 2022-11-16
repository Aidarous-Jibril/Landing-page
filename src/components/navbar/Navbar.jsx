import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false)  

return (
    <div className='app__navbar'>
      <div className="app__navbar-logo" id='home'>
        <img src={images.ingoude} alt="app__logo" id='home' />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">hem</a></li>
        <li className="p__opensans"><a href="#about">om oss</a></li>
        <li className="p__opensans"><a href="#menu">meny</a></li>
        <li className="p__opensans"><a href="#awards">awards</a></li>
        <li className="p__opensans"><a href="#contact">koktakt</a></li>
      </ul>
      <div className="app__navbar-login">
      <a href="#login" className="p__opensans">logga in / registrera</a>
        <div />
        <a href="/" className="p__opensans">Boka bord</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Hem</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>om oss</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>meny</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Kontakt</a></li>
            </ul>
        </div>
        )}

      </div>
    </div>
  )
}

export default Navbar
