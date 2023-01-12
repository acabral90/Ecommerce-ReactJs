import React from 'react'

function ItemDetail(props) {
  
  
  return (
    <div className='card-detail'>
        <div className='card-detail-img'>
            <img src={props.img} alt={props.title} />
        </div>
        <div className='card-detail-desc'>
            <h1 className='card-detail-title'>{props.title}</h1>
            <h3 className='card-detail-detail'>{props.detail}</h3>
            <h4 className='card-detail-price'>${props.price}</h4>
        </div>
    </div>
  )
}

export default ItemDetail