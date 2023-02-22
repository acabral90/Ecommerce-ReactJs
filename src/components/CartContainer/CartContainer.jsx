import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../storage/cartContext'
import { createOrder_WithStockControl } from '../../services/firebase'
import Swal from 'sweetalert2'
import FormCheckout from '../FormCheckout/FormCheckout'

function CartContainer() {

    

    const {orderId, setOrderId, cart, removeItem, totalPrice} = useContext(cartContext)

    const navigateTo = useNavigate()

    function handleCheckout(evt, userData) {
      evt.preventDefault();
      
      const items = cart.map(({ id, price, title, count }) => ({
        id,
        price,
        title,
        count,
      }));
  
      const order = {
        buyer: {
          name:"Alejandro",
          email: "aomcabral@gmail.com",
          phone: "1151219605"
        },
        items: items, 
        total: totalPrice(),
        date: new Date(),
      };

      async function sendOrder() {
        try {
          let id = await createOrder_WithStockControl(order);
          setOrderId(id);
          navigateTo(`/thank-you/${id}`)
        } catch (error) {
          Swal.fire({
            title: "Ocurrió un error con tu compra",
            text: error,
            icon: "error",
            confirmButtonText: "Volver",
          });
        }
      }
  
      sendOrder();

      console.log(orderId)

      
    }



  return (
        <div>
          <table>
            <thead>Mi carrito</thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cartList">
                  <td>
                    <img height={50} src={item.img} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>{item.count}</td>
                  <td>
                    <button onClick={removeItem} color="#c63224">
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='finishCart-container'>
            
            <div className='total'>Total: ${totalPrice()}</div>

            <button className='btn btn-primary'  data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar compra</button>
            <Link to={"/"} className='btn btn-primary'>Continuar comprando</Link>
          </div>

          <FormCheckout onHandleCheckout={handleCheckout}/>        

        </div>

        
  )
}

export default CartContainer