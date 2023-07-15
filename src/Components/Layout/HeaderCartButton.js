import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'


function HeaderCartButton(props){
         
    const[buttonIsHighLighted,setButtonIsHighLighted] =useState(false)
      const cartCtx =useContext(CartContext)
      const {items} =cartCtx;

      const numberOfCartItems =items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
      },0);
      //reduce is a react function joo use me lete hai kuki isme hame byana hai ki hame amount kitni bhi dali ho usko cart me tho 1 hi mana jayega na just
    //   eg pizza 3 order kiye likin cart me amount 3 hai item toh 1 hi hai na isliye reduce function use liya hai

    const btnClasses =`${classes.button} ${ buttonIsHighLighted ? classes.bump : ''}`
      useEffect(()=>{
         
        if(items.length ===0){
            return;
        }
           setButtonIsHighLighted(true)
          
          const timer= setTimeout(()=>
           {
            setButtonIsHighLighted(false)
           },300)
           return ()=>{
            clearTimeout(timer)
           }
      },[items])

    return(
    <button className={btnClasses} onClick={props.onClick}>
    {/* here onclick ={props.onClick is used because ye us functin ko props krega joo header.js me onclick pe ho rhi hai } */}
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span> Your Cart</span>
        <span className={classes.badge}> {numberOfCartItems}</span>

    </button>
)


}

export default HeaderCartButton;