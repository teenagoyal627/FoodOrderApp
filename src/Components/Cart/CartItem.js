import classes from './CartItem.module.css'

function CartItem(props){
     const price =`$${props.price.toFixed(2)}`
    return(
        <li className={classes['cart-item']}>
        <div>
            <h2>{props.name}</h2>
            <div className={classes.summary}>
                <span className={classes.price}>{price}</span>
                <span className={classes.amount}>*{props.amount}</span>
            </div>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
{/* onRemove and onAdd is a type of props which is used in cart.js */}
        </div>

        </li>
    )
}
export default CartItem;