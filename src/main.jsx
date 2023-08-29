import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    
    <Header/>
  
    <Outlet/>

    <Footer />

 </BrowserRouter>
   

)
