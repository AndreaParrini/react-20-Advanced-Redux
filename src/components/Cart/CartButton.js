import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();

  function handleShowCart(){
    dispatch(uiActions.toggleShowCart())
  }

  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
