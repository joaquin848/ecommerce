import cart from "../../img/cart.svg"

const CartWidget = () => {
    return(
        <div className="containerLength">
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;