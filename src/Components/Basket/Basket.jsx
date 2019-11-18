import React from 'react';
import Item from 'src/Components/Item/Item';
import {sum} from 'src/utils';
import './Basket.scss';

const Basket = ({basket}) => (
  <div className="basket">
    <h1>Basket</h1>
    <div className="basket__container">
    {
      basket.map(prod => (
        <Item key={prod.id} {...{...prod}} />
      ))
    }
    </div>
    <h2>Total: {sum(basket)}</h2>
  </div>
);

export default Basket;
