import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../storage/cartContext";

function CartWidget() {

    const {totalItemsInCart} = useContext(cartContext)



    return(
        <div>
            <Link to={"/cart"}>
                <img src="/images/cart4.svg" alt="carrito" />
            </Link>
            <span>{totalItemsInCart()}</span>
        </div>    
        
    );
};

export default CartWidget;