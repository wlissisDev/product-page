import React, {useState} from 'react'
import { InfoProduct } from '../../components/InfoProduct'
import { Navbar } from '../../components/Navbar'
import { ViewProduct } from '../../components/ViewProduct'
import style from './style.module.css'


export const Product = () => {
  const [amount, setAmount] = useState(0)
  
  function addProductCart(valueAmount){
    setAmount(valueAmount)
  }

  return (
    <div className={style.container}>
      <Navbar amountProduct={amount} />
      <div className={style.product}>
        <ViewProduct />
        <InfoProduct amount={amount} setAmount={setAmount}/>
      </div>
    </div>
  )
}
