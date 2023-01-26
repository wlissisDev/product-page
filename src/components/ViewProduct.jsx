import React, { useState } from 'react'
import style from './viewproduct.module.css';
import thumbnail1 from '../images/image-product-1.jpg'
import thumbnail2 from '../images/image-product-2.jpg'
import thumbnail3 from '../images/image-product-3.jpg'
import thumbnail4 from '../images/image-product-4.jpg'

export const ViewProduct = () => {
  const [src, setSrc] = useState(thumbnail1)

  return (
    <div className={style.container}>
      <div className={style['content-image']}>
        <img className={style.image} src={src} alt="imagem do produto" />
      </div>
      <div className={style['content-thumbnail']}>
        <img className={style.thumbnail} onClick={() => setSrc(thumbnail1)} src={thumbnail1} alt="imgem do produto" />
        <img className={style.thumbnail} onClick={() => setSrc(thumbnail2)} src={thumbnail2} alt="imgem do produto" />
        <img className={style.thumbnail} onClick={() => setSrc(thumbnail3)} src={thumbnail3} alt="imgem do produto" />
        <img className={style.thumbnail} onClick={() => setSrc(thumbnail4)} src={thumbnail4} alt="imgem do produto" />
      </div>
    </div>

  )
}
