import React from 'react'
import SubHeading from '../subheading/SubHeading'

import { data } from '../../constants';
import './Awards.css'

const AwardCard = ({ award: {imgUrl, title, subtitle} }) => {
    console.log(title)
    return (
        
      <div className="row__card">
          <div className="row__card-header">
          <img src={imgUrl} alt="" />
        </div>
        <div className="row__card-body">
              <h1>{title}</h1>
          <p className='p__opensans'>{subtitle}</p>
          <a href="#" className="btn">Läs mer</a>
        </div>
      </div> 
  )
        
}



const Awards = () => {
   
  return (
    <main style={{ width: '100%', backgroundColor: 'black',}}>
      <div className="app__awards" id="awards">
        <div className="awards__heading">
          <SubHeading title="Utmärkelser och erkännande" />
          <h1 className="headtext__cormorant">våra Laurels</h1>
        </div>

        <div className="awards__row">
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}


        </div>
      </div>
    </main>
  )
}

export default Awards