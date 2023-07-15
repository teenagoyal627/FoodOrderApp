import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
// import CartProvider from '../../../Store/CartProvider';
import classes from './MealsItem.module.css'
import MealItemForm from './MealsItemForm';

function MealItem(props){
    const cartCtx =useContext(CartContext)
  const price =`$${props.price.toFixed(2)}`;
  //toFixed is used for price is takes after decimal 2 digit
  //two $$ signs represent 1st for output the character dollar sign and 2nd for the combination with the curly braces  
  // to inject the dynamic content into this  template literals
  

  const addToCartHandler =(amount)=>
  {
            cartCtx.addItem({ //additem from cartProvider.js
                id:props.id,
                name:props.name,
                amount:amount,
                price:props.price
            })
  }
  return(
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
           < MealItemForm
              id ={props.id}
                onAddToCart ={addToCartHandler}
              />
        </div>
    </li>
    )
}
export default MealItem;