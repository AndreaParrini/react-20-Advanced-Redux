import {Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch()

  const isShow = useSelector(state=> state.ui.isShow);
  const notification = useSelector(state=> state.ui.notification);
  const cart= useSelector(state=> state.cart);

  useEffect(()=>{
    const sendCartData = async ()=>{
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data'
      }))

      const response = await fetch('https://react-http-c7d71-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if(!response.ok){
        throw new Error('Sending data cart failed');
      }


      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    }

    if(isInitial){
      isInitial = false;
      return
    }

    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    })
    
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {isShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
    
  );
}

export default App;
