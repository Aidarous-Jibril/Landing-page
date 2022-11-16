import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading'

import './CocktailDetail.css'

const CocktailDetail = () => {
    const { id } = useParams()
console.log(id)
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)
    console.log(cocktail)
  
    useEffect(() => {
      setLoading(true)
      const getCocktail = async () => {
        try {
            const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
			const { drinks } = data;
          if (drinks) {
            const {
              strDrink: name,
              strDrinkThumb: image,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = data.drinks[0]
            const ingredients = [ strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 ]
            const newCocktail = {
              name,
              image,
              info,
              category,
              glass,
              instructions,
              ingredients,
            }
            setCocktail(newCocktail)
          } else {
            setCocktail(null)
          }
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
      }
      getCocktail()
    }, [id])

    if (loading) {
      return <Loading/>
    }
    if (!cocktail) {
      return <h2 className='section-title'>no cocktail to display</h2>
    }
    const {instructions, name, image, category, info, glass, ingredients   } = cocktail
    return (
        <>
          <section className='section cocktail__section'>
              <Link to='/' className='custom__button goback ' >
                Tillbaka
              </Link>
              <h2 className='cocktail__section-title'>{name}</h2>
                <div className='cocktail__section-drink'>
                    <img src={image} alt={name}></img>
                    <div className='drink-info'>
                        <p>
                        <span className='drink-data'>namn :</span> {name}
                        </p>
                        <p>
                        <span className='drink-data'>kategori :</span> {category}
                        </p>
                        <p>
                        <span className='drink-data'>info :</span> {info}
                        </p>
                        <p>
                        <span className='drink-data'>glass :</span> {glass}
                        </p>
                        <p>
                        <span className='drink-data'>beskriving :</span> {instructions}
                        </p>
                        <p>
                        <span className='drink-data'>ingrediensier :</span>
                        {ingredients.map((item, index) => {
                            return item ? <span key={index}> {item}</span> : null
                        })}
                        </p>
                    </div>
                </div>
        </section>
     </>
    )
}

export default CocktailDetail
