import React, { createContext, useState } from 'react'


export const cartContext = createContext ({cart: []});

function CartProvider (props){
    const [cart, setCart] = useState([]);

    const [orderId, setOrderId] = useState([])

    let newCart= [...cart]
    
    function addToCart(products) {
        let isInCart= newCart.find((productsInCart)=> productsInCart.id === products.id)

        if(isInCart){

            let arrayCart = [isInCart]

            arrayCart.map((prodIterado)=> prodIterado.count += products.count)
            
            setCart(newCart)
        }else {

        newCart.push(products)
        setCart(newCart)
        }
    }

    function removeItem(products){
        let productIndex = newCart.findIndex((productsInCart)=> productsInCart.id === products.id)

        newCart.splice(productIndex, 1)

        setCart(newCart)
    }

    function totalPrice(){
        let total = cart.reduce((acc, itemIterado)=> acc + itemIterado.count * itemIterado.price, 0)
        
        return total
    }    

    function totalItemsInCart(){
        let total = cart.length

        return total 
    }
        
    return(
        <cartContext.Provider value={{test, cart, addToCart, removeItem, totalItemsInCart, totalPrice, orderId, setOrderId}}>
            {props.children}

        </cartContext.Provider>
    )

}

export default CartProvider
