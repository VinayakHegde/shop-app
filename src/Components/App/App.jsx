import React, {useReducer} from 'react';
import Products from 'src/Components/Products/Products';
import Basket from 'src/Components/Basket/Basket';
import {products as prods} from 'src/data.json';
import './App.scss';

const reducer = (state, {payload, type}) => {
  switch(type) {
    case 'ADD':
      return {basket: [...state.basket, ...[payload]]};
    case 'REMOVE': 
      return {basket: state.basket.filter(b => b.id !== payload.id)};
    default: return {basket: []};
  }
}

const App = () => {
  const products = Object.keys(prods).map(key => ({
    ...prods[key],
    id: key
  }));

  const [state, dispatch] = useReducer(reducer, {basket: []});
  return (
    <>
      <header>shop-app</header>
      <main>
        <Products {...{products, dispatch}}/>
        <Basket {...{...state}}/>
      </main>
      <footer>&copy; Made by Vinnie with React</footer>
    </>
  );
};

export default App;
