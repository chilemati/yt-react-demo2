import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'


const Car = lazy(()=> import('./components/Car'))
const Bottle  = lazy(()=> import('./components/Bottle'));
const Blog  = lazy(()=> import('./components/Blog/Blog'));
const Nav  = lazy(()=> import('./components/nav/Nav'));
const Error  = lazy(()=> import('./components/error/Error'));
const Details  = lazy(()=> import('./components/details/Details'));
const Login  = lazy(()=> import('./components/login/Login'));
const Signup  = lazy(()=> import('./components/signup/Signup'));
const Update  = lazy(()=> import('./components/update/Update'));
const Create  = lazy(()=> import('./components/create/Create'));
const Parent  = lazy(()=> import('./components/parent/Parent'));


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
       {/* <Parent /> */}
          <Suspense fallback={<div className='flexCenter min-h-[70vh] text-red-700 font-edu text-3xl ' >Loading...</div>} >
        <Routes>
          <Route path='/bottle' element={<Bottle />} />
          <Route path='/car' element={<Car />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:slug' element={<Update />} />
          {/* /blog/1*/}
          <Route path='/blog/:id' element={<Details />} />
          <Route path='*' element={<Error />} />
        </Routes>
          </Suspense>
     </div> 
  
  )
}

// js environ

export default App
