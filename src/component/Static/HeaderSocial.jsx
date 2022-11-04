import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {GrTwitter} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import './static.css';
const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/Dipak1203" target="_blank"><BsGithub /></a>
        <a href="https://twitter.com/DipakKDai" target="_blank"><GrTwitter /></a>
        <a href="https://www.instagram.com/dipakkumal2/" target="_blank"><BsInstagram /></a>
        <a href="https://www.facebook.com/dipak.kumal.9235" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial;