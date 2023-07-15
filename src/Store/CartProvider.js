import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updatedItems = state.items.concat(action.item);//concat means joo bhi itemsupdate ho rha hai voo cart me add hota jayega
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount; //this is important this is calculate the total amount of the user

    const existingCartItemIndex = state.items.findIndex(
      //findIndex is a type of function which is used for when more than one time the same user is place the order in cart than it add the user order bar bar naam na dikheye
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount, //store the updatetotalamount in totalamount
    };
  }
  if(action.type ==="REMOVE"){
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem =state.items[existingCartItemIndex];
       const updatedTotalAmount =state.totalAmount - existingItem.price;

       let updatedItems;
       if(existingItem.amount === 1){
        updatedItems=state.items.filter(item => item.id !== action.id)

       }else{
        const updatedItem ={...existingItem,amount:existingItem.amount-1}
        updatedItems= [...state.items]
        updatedItems[existingCartItemIndex]=updatedItem;
       }

       return{
        items:updatedItems,
        totalAmount:updatedTotalAmount
       }
    }
  return defaultCartState;
};

const CartProvider = (props) => {
  //usereducer is just like usestate
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
