import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

export default function Application() {
  return (
<>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/about' element={<About/>}/>
            <Route path='/About' element={<About/>}/>

            {/* <Route path='/Store' element={<Store/>}/>
            <Route path='/store' element={<Store/>}/> */}

            <Route path='/*' element={<PageNotFound/>}/>

        </Routes>
    </BrowserRouter>
    <Footer/>
    </>  

  )
}
