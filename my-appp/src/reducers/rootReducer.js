const initState = {
  count: 5,
  loading: false,
  user: null,
  cart: [],
  items: null,
  item: null,
  err: {
    msg: {msg:null},
    status: null,
    id: null
  },
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false
}

const reducer = (state = initState, action) => {
  if(action.type === 'ADD'){
    return {
      count: state.count + 2
    };
  }else if(action.type === 'GET_ITEMS'){
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
  }else if(action.type === 'USER_LOADEING'){
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
      user: action.payload
    };
  }else if(action.type === 'REGISTER_SUCCESS' || action.type === 'LOGIN_SUCCESS'){
    localStorage.setItem('token', action.payload.data.token)
    return {
      ...state,
      isLoading: false,
      isAuthenticated: true,
      user: action.payload.data.user,
      cart: action.payload.data.user.cart
    };
  }else if(action.type === 'AUTH_ERROR' || action.type === 'REGISTER_FAIL' || action.type === 'LOGIN_FAIL' || action.type === 'LOGOUT_SUCCESS'){
    console.log('auth er')
    localStorage.removeItem('token')
    return {
      ...state,
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false
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