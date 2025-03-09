import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const quantity= useSelector(state=>state.cart.quantity)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {quantity >0 && <CartItem
          item={{ title: 'Test Item', quantity: quantity, price: 6 }}
        />}
        {quantity === 0 && <p>No items in a cart</p>}
      </ul>
    </Card>
  );
};

export default Cart;
