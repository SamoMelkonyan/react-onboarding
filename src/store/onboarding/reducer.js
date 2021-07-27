const reducer = (state = {step: null}, action) => {
  if (action.type === 'SET_STEP') {
    return {
      ...state,
      step: action.payload
    }
  } else if (action.type === 'CLOSE') {
    return {
      ...state,
      step: null
    }
  }
  return state;
}

export default reducer;