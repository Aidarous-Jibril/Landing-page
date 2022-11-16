import React, { useContext } from 'react'
import CocktailCard from './CocktailCard'
import Loading from './Loading'

// import'./Cocktail.css'
import { Context } from '../../context/Context'

export default function CocktailList() {
  const { cocktails, loading} = useContext(Context)
  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        Inga cocktails matchade dina sökkriterier
      </h2>
    )
  }
  return (
    <section className='section__padding'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <CocktailCard key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
