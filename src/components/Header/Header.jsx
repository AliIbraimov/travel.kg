import React from 'react'
import './Header.css'
import Regions from '../../pages/Regions/Regions';
import Information from '../../pages/Information/Information';
import Teams from '../../pages/Teams/Teams';
import Testmonials from '../../pages/Testimonials/Testmonials';
import BlogPage from '../../pages/Blog/BlogPage';
import Contact from '../../pages/Contact/Contact';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-wrapper'>
            <div className='text-header'>
                <h3>TRAVEL KG</h3>
            </div>
            <div className='navbar'>
              <ul>
                <Link to='/'>Home</Link>
                <Link to={'/Information'}>Information</Link>
                <Link to={'/Regions'}>Regions</Link>
                <Link to={'/Teams'}>Teams</Link>
                <Link to={'/Testmonials'}>Testmonials</Link>
                <Link to={'/Blog'}>Blog</Link>
                <Link>Contact</Link>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
