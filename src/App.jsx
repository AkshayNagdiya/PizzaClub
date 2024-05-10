import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import OurMenu from './screens/OurMenu'
import SpecialM from './screens/SpecialM'
import Cart from './screens/Cart'
import PageNotFound from './screens/PageNotFound'
import MainMenu from './screens/MainMenu';
import Contact from './screens/Popup';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/ourmenu' element={<OurMenu />} />
        <Route path='/SpecialM' element={<SpecialM />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/menu' element={<MainMenu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  )
}

export default App