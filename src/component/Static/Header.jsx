import React from 'react'
import CTA from './CTA'
import Me from '../assets/me.png';
import HeaderSocial from './HeaderSocial';
import './static.css';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Dipak Kumal</h1>
        <h5 className="text-light">MERN Stact Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="My Profile" className='' />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header