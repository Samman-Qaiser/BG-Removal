import { useState } from 'react'
import Herosection from './pages/Herosection'
import Navbar from './Components/Navbar'
import { Home } from './pages/Home'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ResultPage from './pages/ResultPage'
import PricingPage from './pages/PricingPage'

function App() {


  return (
  <>
    <Navbar />
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<ResultPage/>}/>
            <Route path='/pricing' element={<PricingPage/>}/>
    </Routes>
  </BrowserRouter>


  <Footer />
  </>
  )
}

export default App
