import React from 'react'
import './Home.css'

import Banner from '../../components/banner/Banner'
import AboutUs from '../../components/about/AboutUs'
import MenuItems from '../../components/menu/MenuItems'
import Video from '../../components/videoIntro/Video'
import Awards from '../../components/awards/Awards'
import Gallery from '../../components/gallery/Gallery'
import FindUs from '../../components/findus/FindUs'
import CocktailContainer from '../../components/cocktail-components/CocktailContainer'

const Home = () => {
  return (
    <div id='home'>
      <Banner />
      <AboutUs />
      <MenuItems />
      <CocktailContainer />
      <Video />
      <Awards />
      {/* <Gallery />  */}
      <FindUs />
    </div>
  )
}

export default Home
