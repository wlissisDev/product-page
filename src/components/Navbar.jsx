import React, { useState } from 'react'
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'
import thumbnailCart from '../images/image-product-1-thumbnail.jpg';

import style from './navbar.module.css'
import delet from '../images/icon-delete.svg'

export const Navbar = ({ amountProduct }) => {

  const [activeCart, setActiveCart] = useState(false);

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
          <img
            className={style.cart} src={cart}
            alt="cart"
            onClick={(e) => setActiveCart(!activeCart)} />

          <div className={style.amountProduct} style={amountProduct > 0 ? { display: "block" } : { display: "none" }}>{amountProduct}</div>

          <div className={style.cartAmount} style={activeCart ? { display: 'flex' } : { display: 'none' }}>
            <span id={style.titleCart}>Cart</span>
            <div>
              <img src={thumbnailCart} alt="" />
              <div className={style.infoCartAmoun}>
                <p >Fall Limited Edition Sneakers</p>
                <span className={style.priceCartAmount}>$125.00 x {amountProduct} <strong>${125 * amountProduct}.00</strong></span>
              </div>
              <img id={style.deleteCart} src={delet} alt="" />
            </div>
            <button>Checkout</button>
          </div>


          <img className={style.avatar} src={avatar} alt="perfil" />
        </div>
      </div>

    </div>
  )
}
