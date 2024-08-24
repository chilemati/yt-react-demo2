import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car'
import Bottle from './components/Bottle'
import Blog from './components/Blog/Blog'
import ItBerries from './components/Itberries/ItBerries'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Error from './components/error/Error'
import Details from './components/details/Details'

// js environ

function App() {
// js environ
  return (
  
     <div>
        <Nav />
        {/* router step 3 */}
        <Routes>
          <Route path='/bottle' element={<Bottle />} />
          <Route path='/car' element={<Car />} />
          <Route path='/blog' element={<Blog />} />
          {/* /blog/sidosids */}
          <Route path='/blog/:id' element={<Details />} />
          <Route path='*' element={<Error />} />
        </Routes>
     </div> 
  
  )
}

// js environ

export default App
