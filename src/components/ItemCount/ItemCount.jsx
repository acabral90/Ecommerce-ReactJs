import React from 'react'
import { useState } from 'react'



function ItemCount({ onAddToCart, stock }) {
    const [count, setCount] = useState (1);

    function handleAdd(){
        if(count < stock)
        setCount (count +1)
    }

    function handleSustract(){
         
        setCount (count -1)
    }

  return (
    <div className='itemcount-container'>
        <h4>Agregá la cantidad deseada</h4>
        
        <div className='itemcount-control'>
            <button onClick={handleSustract} disabled= {count === 0}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </div>
        
        <div className='itemcount-btn'>
        <button onClick={()=> onAddToCart(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount