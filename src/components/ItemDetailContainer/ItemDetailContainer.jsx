import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase'
import "./itemdetailcontainer.css"
import { cartContext } from '../../storage/cartContext'
import { useContext } from 'react'

function ItemDetailConteiner() {
    const [productos, setProductos] = useState([]);
    const [ isInCart, setIsInCart] = useState(false);

    let params = useParams();
   

    const {addToCart,cart} = useContext(cartContext);

    function handleAddToCart(count){
      setIsInCart(true);
      const productsAndCount = {...productos, count: count}
      addToCart(productsAndCount)
     
    } 

    useEffect(() => {
        getProducts(params.itemid)
        .then((respuesta) =>{
            setProductos(respuesta)
        });
    },[]);

    function checkStock() {
      let itemInCart = cart.find((item) => item.id === productos.id);
  
      let stockUpdated = productos.stock;
  
      if (itemInCart) {
        stockUpdated = productos.stock - itemInCart.count;
      }
      return stockUpdated;
    }

  return (
    <div className='itemDetailContainer'>
    <ItemDetail
     isInCart={isInCart}
     onAddToCart= {handleAddToCart}
     title={productos.title}
     price={productos.price}
     description={productos.description}
     img={productos.img}
     stockUpdate={checkStock()}
     />
     </div>
    
  )
}

export default ItemDetailConteiner