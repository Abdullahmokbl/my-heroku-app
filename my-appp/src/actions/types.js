import axios from 'axios';

export const add = () => {
  console.log('sd')
  return {
    type: 'ADD'
  }
}

export const return_errors = (msg, status, id=null) => {
  console.log('sdd')
  return {
    type: 'GET_ERRORS',
    payload: {msg, status, id}
  }
}
export const clear_errors = () => {
  return {
    type: 'CLEAR_ERRORS'
  }
}

export const load_user = () => (dispatch, getState) => {
  // user loading
  dispatch({type: 'USER_LOADING'})

  // get token
  const token = getState().token

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
    }
  }

  if(token){
    axiosConfig.headers['x-auth-token'] = token;
  }

  axios.get('http://localhost:5000/user', axiosConfig)
    .then(res=>{
      dispatch({
        type: 'USER_LOADED',
        payload: res.data
      })
    })
    .catch(err=>{
      console.log(err)
      dispatch(return_errors(err.response.data, err.response.status))
      dispatch({
        type: 'AUTH_ERROR'
      })
    })

}

export const sign_up = (user) => dispatch => {
  // console.log('t', user)
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/signup', user, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'REGISTER_FAIL'))
    dispatch({
      type: 'REGISTER_FAIL'
    })
  })
}

export const log_in = (user) => dispatch => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };
  axios.post('http://localhost:5000/login', user, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res
    })
  )
  .catch(err=> {
    dispatch(return_errors(err.response.data, err.response.msg, 'LOGIN_FAIL'))
    dispatch({
      type: 'LOGIN_FAIL'
    })
  })
}

export const log_out = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

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
// export const add_img = img => dispatch => {
//   console.log('imgtttttttt')
//   let axiosConfig = {
//     headers: {
//       // 'Content-Type': 'application/json;charset=UTF-8',
//       'Content-Type': 'multipart/form-data;',
//       'Access-Control-Allow-Origin': "*",
//       }
//   };
//   // axios.post('http://localhost:5000/items/img', img, axiosConfig)
//   // console.log('tttttrff')
//   axios.post('http://localhost:5000/items/img', img, axiosConfig)
//   .then(res=>
//     dispatch({
//       type: 'ADD_IMG',
//       item: res
//     })
//   )
//   .catch(err=>{
//     dispatch(return_errors(err.response.data, err.response.status, 'ADD_IMG_FAIL'))
//     dispatch({
//       type: 'ADD_IMG_FAIL'
//     })
//   })
// }
export const add_item = item => dispatch => {
  // console.log('m',...item)
  let axiosConfig = {
    headers: {
      // 'Content-Type': 'application/json;charset=UTF-8',
      'Content-Type': 'multipart/form-data;',
      'Access-Control-Allow-Origin': "*",
      }
  };
  // axios.post('http://localhost:5000/items/img', img, axiosConfig)
  // console.log('tttttrff')
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

export const add_to_cart = (user_id, cart) => dispatch => {
  console.log('mf')
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart',{user_id, cart} , axiosConfig)
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
export const del_cart = (user_id, cart) => dispatch => {
  console.log('del_cart')
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart/del',{user_id, cart} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'DEL_CART',
      item: res
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'DEL_CART_FAIL'))
    dispatch({
      type: 'DEL_CART_FAIL'
    })
  })
}