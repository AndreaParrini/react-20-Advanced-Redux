import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const quantity = useSelector(state=>state.cart.quantity)

  function handleShowCart(){
    dispatch(uiActions.toggleShowCart())
  }

  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
