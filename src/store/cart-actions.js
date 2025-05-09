import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = ()=>{
    return async (dispatch) => {
        const fetchData = async ()=>{
            const response = await fetch('https://react-http-c7d71-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();
            return data;

        };

        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                quantity: cartData.quantity
            }))
        }catch (error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Error to fetch data cart'
            }))
        }
    }     
}

export const sendCartData = (cart) => {
    return async (dispatch) =>{
        dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data'
      }))

      const sendRequest = async ()=>{
        const response = await fetch('https://react-http-c7d71-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify({
            items: cart.items,
            quantity: cart.quantity
        })
      })

       if(!response.ok){
        throw new Error('Sending data cart failed');
      }
      }

      try{
        await sendRequest();

        dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
      } catch (error){
        
        dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
      }
    }
}