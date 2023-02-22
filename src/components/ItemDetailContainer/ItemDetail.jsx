import React from 'react'

import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css"

function ItemDetail({
  onAddToCart,
  isInCart,
  title,
  price,
  description,
  img,
  stockUpdate
  
}) {
  
  
  return (
    <div className='card-detail'>
        <div className='card-detail-img'>
            <img className='card-img' src={img} alt={title} />
        </div>
        <div className='card-detail-desc'>
            <h1 className='card-detail-title'>{title}</h1>
            <h3 className='card-detail-detail'>{description}</h3>
            <h4 className='card-detail-price'>${price}</h4>
        </div>

        <ItemCount stock={stockUpdate} onAddToCart={onAddToCart}/>
    </div>
  )
}

export default ItemDetail