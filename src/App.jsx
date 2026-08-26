
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import Pro from './page/Pro'
import Aboutpage from './page/Aboutpage'
import Contact from './page/Contact'
import Productdetail from './page/Productdetail'
import Cartpage from './page/Cartpage'
function App() {
  return (
    <div>
      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Products' element={<Pro />} />
        {/* dynamix router */}
        <Route path='/Products/:id' element={<Productdetail/>}/>

        <Route path='/About' element={<Aboutpage />} />
        <Route path='/Contacts' element={<Contact />} />
        <Route path='/cart' element={<Cartpage/>}/>

      </Routes>

    </div>
  )
}

export default App
