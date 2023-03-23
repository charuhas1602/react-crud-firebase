import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AddEdit from './pages/AddEdit'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addedit' element={<AddEdit />} />
          <Route path='/update/:id' element={<AddEdit />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
