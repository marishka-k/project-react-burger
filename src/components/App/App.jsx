import React from 'react';
import './App.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'

function App() {
    return (
      <>
      <AppHeader/>
      <div className='main'>
        <BurgerIngredients/>
      </div>
      </>
    );
}

export default App;
