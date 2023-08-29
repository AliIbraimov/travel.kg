import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout';
import Information from './pages/Information/Information';
import Regions from './pages/Regions/Regions';
import Testimonials from './pages/Testimonials/Testmonials';
import BlogPage from './pages/Blog/BlogPage';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <div>
      <Routes path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='Information' element = {<Information/>} />
        <Route path='Regions' element={<Regions/>}/>
        <Route path='Teams' element ={<Teams />} />
        <Route path='Testimonials' element={<Testimonials/>} />
        <Route path='Blog' element={<BlogPage />} />
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
