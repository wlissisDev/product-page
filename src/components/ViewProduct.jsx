import React from 'react'
import style from './viewproduct.module.css';
import thumbnail1 from '../images/image-product-1.jpg'
import thumbnail2 from '../images/image-product-2.jpg'
import thumbnail3 from '../images/image-product-3.jpg'
import thumbnail4 from '../images/image-product-4.jpg'

export const ViewProduct = () => {
  return (
    <div className={style.container}>
      <div className={style['content-image']}>
        <img className={style.image} src={thumbnail1} alt="imagem do produto" />
      </div>
      <div className={style['content-thumbnail']}>
        <img className={style.thumbnail} src={thumbnail1} alt="imgem do produto" />
        <img className={style.thumbnail} src={thumbnail2} alt="imgem do produto" />
        <img className={style.thumbnail} src={thumbnail3} alt="imgem do produto" />
        <img className={style.thumbnail} src={thumbnail4} alt="imgem do produto" />
      </div>
    </div>

  )
}
