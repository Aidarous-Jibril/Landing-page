
import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './screens/home/Home'
import CocktailDetail from './screens/cocktail/CocktailDetail'
import Footer from './screens/footer/Footer.jsx'

import './App.css'
import Error from './screens/Error.jsx'

const App = () => {
  return (
    <div className='app' >
       <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cocktails/:id' element={<CocktailDetail />} />
            <Route path='*' element={<Error />} />

        </Routes>
      <Footer />

    </div>
  )
}

export default App