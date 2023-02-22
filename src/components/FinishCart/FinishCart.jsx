import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../storage/cartContext'
import CartContainer from '../CartContainer/CartContainer'

function FinishCart({id}) {

    const {orderId, setOrderId} = useContext(cartContext)

    console.log(id)
  return (
    <h1>Gracias por tu compra el id de tu compra es {orderId} </h1>
  )
}

export default FinishCart