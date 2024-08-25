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
import State from './components/state/State'

// js environ

function App() {
// js environ

// npm create vite@latest new-react -- --template react

// cd new-react

// npm install

// npm run dev
  return (
  
     <div>
        <Nav />
        {/* router step 3 */}
        {/* <State /> */}
        <Routes>
          <Route path='/bottle' element={<Bottle />} />
          <Route path='/car' element={<Car />} />
          <Route path='/blog' element={<Blog />} />
          {/* /blog/1*/}
          <Route path='/blog/:id' element={<Details />} />
          <Route path='*' element={<Error />} />
        </Routes>
     </div> 
  
  )
}

// js environ

export default App
