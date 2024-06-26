import React from 'react'
import { TabTitle } from './utils/GeneralFunctions'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
// import Navbar from './components/ui/Navbar'
import Event from './pages/Event'
import Artist from './pages/Artist'
import ContactUs from './pages/ContactUs'
import Footer from './components/footer/Footer'
import Navbar1 from './components/ui/Navbar1'
import ProductDetail from './pages/ProductDetail'
import ArtistDetail from './pages/ArtistDetail'

function App() {
  TabTitle("Artify | Home")
  return (
    <>
      <BrowserRouter>
        <header>
          {/* <Navbar /> */}
          <Navbar1 />
        </header>
        <main className='bg-primary min-h-screen h-auto py-16 px-5 sm:px-10 md:px-14 lg:px-24 '>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/event' element={<Event />} />
            <Route path='/artist' element={<Artist />} />
            <Route path='/artist/:id' element={<ArtistDetail />} />
            <Route path='/contactus' element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
