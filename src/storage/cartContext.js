import React, { createContext, useState } from 'react'


export const cartContext = createContext ({cart: [] });

function CartProvider (props){
    const [cart, setCart] = useState([]);

    const test = () => console.log("test")

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
        
    return(
        <cartContext.Provider value={{test, cart, addToCart}}>
            {props.children}

        </cartContext.Provider>
    )

}

export default CartProvider
