import React from 'react'
import { Link } from 'react-router-dom'

import  './Cocktail.css'

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <article className='cocktail'>
       <div className='img-container'>
         <img src={image} alt={name} />
       </div>
       <div className='cocktail-footer'>
         <h3>{name}</h3>
         <h4>{glass}</h4>
         <p>{info}</p>
         <Link to={`/cocktails/${id}`} className='btn btn-primary btn-details'>
           detailjer
         </Link>
       </div>
     </article>
  )
}

export default CocktailCard
