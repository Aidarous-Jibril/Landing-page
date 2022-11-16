import React from 'react'
import FooterOverlay from '../../components/footer/FooterOverlay'
import Newsletter from '../../components/footer/Newsletter'
import { images } from '../../constants'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer section__padding' >
      <Newsletter />

      <div className="footer__links">
        <div className="footer__links-contact">
          <h1 className="footer__links-contact-header">kontakta oss</h1>
          <p className="p__opensans">Storgatan 1, 12345, Linköping</p>
          <p className="p__opensans">+46 12-344-1230</p>
          <p className="p__opensans">+46 12-555-1230</p>
        </div>

        <div className="footer__links-logo">
          <img src={images.ingoude} alt="footer-logo" />
          <p className="p__opensans">&quot;Lorem Ipsum este pur şi simplu o machetă pentru text.&quot;</p>
          <img src={images.spoon} alt="spoon" style={{marginTop: '15px'}}  />
          <div className="footer__links-icons">
            <FiFacebook size={32} />
            <FiInstagram size={32} />
            <FiTwitter size={32} />
          </div>
        </div>
        <div className="footer__links-work">
          <h1 className="footer__links-work-header">Öppettider</h1>
          <p className="p__opensans">Måndag-Fredag<br />
            <span style={{ color: 'D3D3D3'}}>10:00 - 22:00</span>
          </p>
          <p className="p__opensans">Lördag-Söndag<br />
            <span style={{ color: 'D3D3D3'}}>10:00 - 03:00</span>
          </p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans" >2023 Ingoude. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
