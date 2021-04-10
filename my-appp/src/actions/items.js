import axios from 'axios';
import {return_errors} from './errors';

export const get_items = () => (dispatch, getState) => {

  const token = getState().token;

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };

  if(token){
    axiosConfig.headers['x-auth-token'] = token;
  }

  axios.get('http://localhost:5000/items', axiosConfig)
  .then(res=> 
    dispatch({
      type: 'GET_ITEMS',
      items: res.data
    })
  )
  .catch(err=> console.log(err.response))
}

export const get_item = (id) => dispatch => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };
  axios.get('http://localhost:5000/items/item/'+id, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'GET_ITEM',
      item: res.data
    })
  )
  .catch(err=> console.log(err))
}

export const add_item = item => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'multipart/form-data;',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/items', item, axiosConfig)
  .then(res=>
    dispatch({
      type: 'ADD_ITEM',
      item: res
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'ADD_ITEM_FAIL'))
    dispatch({
      type: 'ADD_ITEM_FAIL'
    })
  })
}

export const get_seller = (user_id) => dispatch => {
  console.log('fdff')
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };
  axios.post('http://localhost:5000/items/seller', {user_id}, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'GET_SELLER_SUCCESS',
      seller: res.data
    })
  )
  .catch(err=> {
    dispatch(return_errors(err.response.data, err.response.msg, 'GET_SELLER_FAIL'))
    dispatch({
      type: 'GET_SELLER_FAIL'
    })
  })
}

export const search_item = (item) => dispatch => {
  if (!item || item === ''){
    dispatch({type: 'SEARCH_ITEM_FAIL'})
    return;
  }
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/items/search',{item} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'SEARCH_ITEM',
      items: res.data
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'SEARCH_ITEM_FAIL'))
    dispatch({
      type: 'SEARCH_ITEM_FAIL'
    })
  })
}