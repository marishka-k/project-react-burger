import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientStyle from './burger-ingredient.module.css'



const BurgerIngredient = (props) => {
    return (
        <li className={BurgerIngredientStyle.card} key = {props._id}>
            <img src={props.img} alt={props.name} />
            <div>
                <p>{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <h2>{props.name}</h2>
        </li>
    )
}

export default BurgerIngredient