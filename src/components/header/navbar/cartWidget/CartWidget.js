import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <i className="fa-solid fa-cart-shopping"> {props.cantidad}</i>
    )
}


export default CartWidget;