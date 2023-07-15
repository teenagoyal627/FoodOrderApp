import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealsItemForm.module.css'
function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
    
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;//+ is used to convert the input into number from string
    
    //condition for empty amount of inputs
    if (enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5) {
        setAmountIsValid(false)
        return;
    }
    
    props.onAddToCart(enteredAmountNumber)//this is used because it clear the amount which is user entered one time beacuse we need to upload different differnt amount in cart so use this this onAddcart is in  mealitem.js
}
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {/* <input/> */}
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount' + props.id, // this changed!
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}
export default MealItemForm;