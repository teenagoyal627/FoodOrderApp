import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {

    const cartCtx =useContext(CartContext);//here usecontext is used as a props so we make cartctx as a props so with the place of props we use cartCtx.it works likes props
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`//total amount is render from the cart-context file.
    const hasItems =cartCtx.items.length>0;
    const cartItemRemoveHandler =(id)=>//this is for - in cart
    {
            cartCtx.removeItem(id)
    }
    const cartItemAddHandler =(item)=>//this is for + in cart
    {
               cartCtx.addItem({...item,amount:1})
    }
    const cartItems = (
        <ul className={classes["cart-items"]}>
           {cartCtx.items.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  amount ={item.amount}
                  price={item.price} 
                  onRemove ={cartItemRemoveHandler.bind(null,item.id)}
                  onAdd={cartItemAddHandler.bind(null,item)} 
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                // this is used for when we click on close button then then it close.onClose props is writer in app.js file and pass
                // hideShownHandler from that props as a function.
                >Close</button>
               {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}
export default Cart;
