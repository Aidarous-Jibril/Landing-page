import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import Categories from '../categories/Categories'
import './MenuItems.css'

const MenuItems = () => {
  const { menuItems, setMenuItems, categories, setCategories, filterItems } = useContext(Context)

console.log(categories)
  return (

      <section className="menu section__padding " id="menu">
        <div className="title">
          <h2>vår meny</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className='section__center'>
          {menuItems.map((item, id) => (
            <article key={id} className='menu__item'>
              <img src={item.img} alt={item.title} className='img' />
              <div className='menu__item-info'>
                <header>
                  <h4>{item.title}</h4>
                  <h4 className='price'>{item.price}</h4>
                </header>
                <p className='menu__item-text'>{item.desc}</p>
              </div>
            </article>
          ))}
       </div>
      </section>

  )
}

export default MenuItems