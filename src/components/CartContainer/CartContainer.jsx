import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../storage/cartContext'

function CartContainer() {

    const {cart} = useContext(cartContext)





  return (
    <div>
    <table>
      <thead>Mi carrito</thead>
      <tbody>
        <tr>
          <th>{item.img}</th>
          <th>{item.title}</th>
          <th></th>
          <th>{item.price}</th>
          <th></th>
        </tr>
      </tbody>
    </table>

    <div className='finishCart-container'>
      <div className='subtotal'></div>
      <div className='total'></div>

      <button>Finalizar compra</button>
      <button>Continuar comprando</button>
    </div>

    </div>
  )
}

export default CartContainer