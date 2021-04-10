const initState = {
  err: {
    msg: {msg:null},
    status: null,
    id: null
  }
}

const errorReducer = (state = initState, action) => {
  if(action.type === 'GET_ERRORS'){
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

export default errorReducer;