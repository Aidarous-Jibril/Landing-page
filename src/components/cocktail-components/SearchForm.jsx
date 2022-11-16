import React, { useContext } from 'react'
import { Context } from '../../context/Context'


export default function SearchForm() {
  const { setSearchTerm} = useContext(Context)
  const searchValue = React.useRef('')

  // React.useEffect(() => {
  //   searchValue.current.focus()
  // }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section__padding search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>sök efter din favoritcocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
