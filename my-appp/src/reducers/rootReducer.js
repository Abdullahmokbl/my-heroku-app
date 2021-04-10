const initState = {
  count: 5,
  user: null,
  cart: [],
  totalPrice: 0,
  items: null,
  item: null,
  search_items: [],
  userItems: [],
  err: {
    msg: {msg:null},
    status: null,
    id: null
  },
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  mail_msg: null
}

const reducer = (state = initState, action) => {
  if(action.type === 'GET_ITEMS'){
    return {
      ...state,
      items: action.items
    };
  }else if(action.type === 'GET_ITEM'){
    return {
      ...state,
      item: action.item
    };
  }else if(action.type === 'ADD_ITEM'){
    return {
      ...state,
      item: action.item
    };
  }else if(action.type === 'USER_LOADING'){
    console.log('loading')
    return {
      ...state,
      isLoading: true
    };
  }else if(action.type === 'USER_LOADED'){
    console.log('loaded')
    return {
      ...state,
      isLoading: false,
      isAuthenticated: true,
      user: action.user,
      cart: action.user.cart
    };
  }else if(action.type === 'REGISTER_SUCCESS' || action.type === 'LOGIN_SUCCESS'){
    localStorage.setItem('token', action.user.token)
    return {
      ...state,
      isLoading: false,
      isAuthenticated: true,
      user: action.user.user,
      cart: action.user.user.cart
    };
  }else if(action.type === 'AUTH_ERROR' || action.type === 'REGISTER_FAIL' || action.type === 'LOGIN_FAIL' || action.type === 'LOGOUT_SUCCESS'){
    console.log('auth er')
    localStorage.removeItem('token')
    return {
      ...state,
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
      cart: []
    };
  }else if(action.type === 'DEL_CART'){
    return {
      ...state,
      cart: state.cart.filter(i=> i.id!==action.cart)
    };
  }else if(action.type === 'DEL_ALL_CART'){
    return {
      ...state,
      cart: []
    };
  }else if(action.type === 'SEARCH_ITEM'){
    return {
      ...state,
      search_items: action.items
    };
  }else if(action.type === 'SEARCH_ITEM_FAIL'){
    return {
      ...state,
      search_items: []
    };
  }else if(action.type === 'GET_USER_ITEM_SUCCESS'){
    return {
      ...state,
      userItems: action.items
    };
  }else if(action.type === 'GET_SELLER_SUCCESS'){
    return {
      ...state,
      seller: action.seller
    };
  }else if(action.type === 'SEND_MAIL'){
    return {
      ...state,
      mail_msg: action.msg
    };
  }else if(action.type === 'GET_ERRORS'){
    return {
      ...state,
      err: action.payload
    };
  }else if(action.type === 'CLEAR_ERRORS'){
    return {
      ...state,
      err: {
        msg: {msg:null},
        status: null,
        id: null
      }
    };
  }
  return state;
}

export default reducer;