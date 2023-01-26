import React from 'react';
import style from './infoproduct.module.css'

export const InfoProduct = () => {
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
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </div>
          <button className={style['btn-add']}>
            <img src="" alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
