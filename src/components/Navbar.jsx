import React from 'react'
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'

import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={style.container} >
      <div className={style.navbar}>
        <div className={style.nav}>
          <img src={logo} alt="logo do site" className={style.logo} />
          <div className={style.navitems}>
            <a className={style.item} href="#">Collections</a>
            <a className={style.item} href="#">Men</a>
            <a className={style.item} href="#">Women</a>
            <a className={style.item} href="#">About</a>
            <a className={style.item} href="#">Contact</a>
          </div>
        </div>
        <div className={style.content}>
          <img className={style.cart} src={cart} alt="cart" />
          <img className={style.avatar} src={avatar} alt="perfil" />
        </div>
      </div>

    </div>
  )
}
