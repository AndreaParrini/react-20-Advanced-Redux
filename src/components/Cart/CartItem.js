import classes from './CartItem.module.css';

import { cartActions } from '../../store/cart-slide';
import { useDispatch} from 'react-redux';

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;

  const dispatch = useDispatch();

  function handleAddItem(){
    dispatch(cartActions.addItem({ id, title, quantity, price }))
  }

  function handleRemoveItem(){
    dispatch(cartActions.removeItem({id}))
  }

  const total = quantity*price;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
