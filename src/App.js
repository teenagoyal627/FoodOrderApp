import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
        const[cartIsShown,setCartIsShown]=useState(false)

        const ShowCartHandler =()=>
        {
                 setCartIsShown(true)
        }
        const hideCartHandler=()=>
        {
          setCartIsShown(false);
        }

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose ={hideCartHandler} />}
      <Header onShowCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  )
}
export default App;