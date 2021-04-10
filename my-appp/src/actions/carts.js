import axios from 'axios';
import {return_errors} from './errors';

export const add_to_cart = (user_id, cart_id, q) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart',{user_id, cart_id, q} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'ADD_TO_CART',
      item: res
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'ADD_TO_CART_FAIL'))
    dispatch({
      type: 'ADD_TO_CART_FAIL'
    })
  })
}
export const del_cart = (user_id, cart_id) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart/del',{user_id, cart_id} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'DEL_CART',
      cart: cart_id
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'DEL_CART_FAIL'))
    dispatch({
      type: 'DEL_CART_FAIL'
    })
  })
}
export const del_all_cart = (user_id) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart/delAll',{user_id} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'DEL_ALL_CART'
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'DEL_ALL_CART_FAIL'))
    dispatch({
      type: 'DEL_ALL_CART_FAIL'
    })
  })
}