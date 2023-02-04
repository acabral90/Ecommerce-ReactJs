import React from 'react';
import react, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductos, getProductsByCategory } from "../services/firebase";
import Flex from './Flex/Flex';
import Item from './Item/Item';


function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    let {categoryid} = useParams();
    
    useEffect(() => {
        if(!categoryid){
        obtenerProductos()
            .then((respuesta) => {
                setProductos(respuesta)
            })
            .catch((error) => alert(error));
        }else{
            getProductsByCategory(categoryid)
            .then((respuesta) =>{
                setProductos(respuesta)
            })
        }    

    }, [categoryid]);
    
    return (

        <Flex>
        {productos.map((itemIterado) => <Item key={itemIterado.id} item={itemIterado}/>)}
        </Flex>

    );
};

export default ItemListContainer