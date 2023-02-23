import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../storage/cartContext'

function FinishCart() {

    const {orderId, setOrderId} = useContext(cartContext)

  return (
    <div>
    <h1>Gracias por tu compra. El id de tu compra es {orderId} </h1>

    <Link to={"/"} className="btn btn-success"> Volver al inicio </Link>
    </div>
  )
}

export default FinishCart