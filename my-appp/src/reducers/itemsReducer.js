const initState = {
  items: null,
  item: null,
  search_items: []
}

const itemsReducer = (state = initState, action) => {
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
  }
  return state;
}

export default itemsReducer;