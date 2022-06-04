import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsStyle from './burger-ingredients.module.css'
import React from 'react';
import {getIngredients} from '../Constats/constats'
import BurgerIngredient from '../burger-ingredient/burger-ingredient'

const BurgerMenu = () => {
    const [current, setCurrent] = React.useState('one')
    
    return (
        <div className={BurgerIngredientsStyle.menu} style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
            </Tab>
        </div>
    )
}

const BurgerIngredients = () => {
    const [ingredients, setIngredients] = React.useState([])

    const handleBurgerIngredients = async () => {
        getIngredients ()
            .then ((data) => {
                setIngredients([...ingredients, data])
            })
    }
    
    return (
        <section className={`mr-10 ${BurgerIngredientsStyle.ingredients}`} onChange={handleBurgerIngredients}>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <BurgerMenu/>
            <div>
            {ingredients.map(ingredient => {
                
                return (
                    <p> {ingredient} </p>
                )
            })}
            </div>

        </section>
       
    );
}

export default BurgerIngredients