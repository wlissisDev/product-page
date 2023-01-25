import React from 'react'
import { InfoProduct } from '../../components/InfoProduct'
import { Navbar } from '../../components/Navbar'
import { ViewProduct } from '../../components/ViewProduct'
import style from './style.module.css'
export const Product = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.product}>
        <ViewProduct />
        <InfoProduct />
      </div>
    </div>
  )
}
