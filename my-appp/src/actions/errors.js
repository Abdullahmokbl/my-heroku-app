export const return_errors = (msg, status, id=null) => {
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