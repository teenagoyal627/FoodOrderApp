import React from "react";

const CartContext = React.createContext({//React.createContext creates a context object .whrn 
    //react renders a component that subscribes to this context object it will read the currnt contect value from the closest mathching provider above it in the tree
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export default CartContext;