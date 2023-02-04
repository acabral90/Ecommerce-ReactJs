import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

function Item(props) {
    const { id, title, price, img, category, description } = props.item
    

  return (
      <div className="card">
          <img src={img} className="card-img-top" alt={title}/>
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text"> {description} </p>
                  <p className='card-price'>$ {price}</p>
                  <Link to={`/item/${id}`} className="btn btn-warning">Comprar</Link>
              </div>
      </div>
  )
}

export default Item