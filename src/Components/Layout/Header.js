import { Fragment } from "react";
import classes from './Header.module.css'
import mealsImage from '../../assests/top-view-table-full-delicious-food-composition_23-2149141353.avif'
import HeaderCartButton from "./HeaderCartButton";
function Header(props)
{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
               <HeaderCartButton onClick ={props.onShowCart}/>
               {/* props.onShowCart is used because isko app.js me as a props me bnaya hai isme se cart kab show hoga voo pass kiya hai
               showCartHandler pass kiya hai jab is button pe click karenge toh cart dikhna chahiye  */}
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table full of delicious food!"
                />
            </div>
        </Fragment>
    )
}
export default Header;