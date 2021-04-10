const initState = {
  user: null,
  cart: [],
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false
}

const userReducer = (state = initState, action) => {
  if(action.type === 'USER_LOADING'){
    return {
      ...state,
      isLoading: true
    };
  }else if(action.type === 'USER_LOADED'){
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
      cart: state.cart.filter(i=> i!==action.cart)
    };
  }else if(action.type === 'DEL_ALL_CART'){
    return {
      ...state,
      cart: []
    };
  }else if(action.type === 'SEND_MAIL'){
    return {
      ...state
    };
  }
  return state;
}

export default userReducer;