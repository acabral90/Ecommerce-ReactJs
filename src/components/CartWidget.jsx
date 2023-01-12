import cart from "../cart4.svg";

function CartWidget() {
    return(
        <li>
            <a href="">
                <img src={cart}/>
            </a>
        </li>

    );
};

export default CartWidget;