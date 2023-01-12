import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../mockService'

function ItemDetailConteiner() {
    const [productos, setProductos] = useState([])

    let params = useParams();

    useEffect(() => {
        getProductos(params.itemid)
        .then((respuesta) =>{
            setProductos(respuesta)
        });
    },[]);

  return (
    <ItemDetail
     title={productos.title}
     price={productos.price}
     detail={productos.detail}
     img={productos.img}
     />
  )
}

export default ItemDetailConteiner