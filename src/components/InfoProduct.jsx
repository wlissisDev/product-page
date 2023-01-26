import React, { useState } from 'react';
import style from './infoproduct.module.css'
import cart from '../images/icon-cart-btn.svg'

export const InfoProduct = ({amount, setAmount}) => {
  return (
    <div className={style.container}>
      <div className={style.contentInfo}>
        <span className={style.subtitle}>SNEAKER COMPANY</span>
        <h1 className={style.title}>Fall Limited Edition Sneakers</h1>
        <p className={style.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>

        <div className={style['content-price']}>
          <div className={style.price}>
            <span>$125.00</span>
            <span>50%</span>
          </div>
          <span className={style.descont}>$250.00</span>
        </div>

        <div className={style['add-cart']}>
          <div className={style.amount}>
            <span
              onClick={() => {
                if (amount < 1) { setAmount(0) }
                else { setAmount(amount-1) }
              }}
            >
              -
            </span>
            <span>{amount}</span>
            <span
              onClick={() => {
                setAmount(amount+1)
              }}
            >
              +
            </span>
          </div>
          <button className={style['btn-add']}>
            <img src={cart} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
