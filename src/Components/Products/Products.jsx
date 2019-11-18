import React from 'react';
import Item from 'src/Components/Item/Item';
import './Products.scss';

const Products = props => (
  <div className="products">
    <h1>Products</h1>
    <div className="products__container">
      {
        props.products.map(prod => (
          <Item key={prod.id} {...{...props, ...prod}} />
        ))
      }
    </div>
  </div>
);

export default Products;
