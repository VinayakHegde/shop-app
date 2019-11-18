import React, {useState} from 'react';
import {capitalise, formatNumber} from 'src/utils';
import './Item.scss';

const Item = ({dispatch, ...theRest}) => {
  const [isAdded, setIsAdded] = useState(false); 
  const {name, price} = theRest;
  const onClick = (flag) => {
    setIsAdded(flag);
    dispatch({type: flag ? 'ADD' : 'REMOVE', payload: {...theRest}});
  }
  return (
    <button onClick={() => dispatch && onClick(!isAdded)}>
      <div>{capitalise(name)}</div>
      <div>{formatNumber(price)}</div>
      {dispatch && <div>{isAdded ? 'Remove' : 'Add'}</div> }
    </button>
  );
};

export default Item;
