import React from 'react'
import SearchForm from './SearchForm'
import CocktailList from './CocktailList'

import'./Cocktail.css'
const CocktailContainer = () => {
  return (
    <div>
        <SearchForm />
        <CocktailList />
    </div>
  )
}

export default CocktailContainer