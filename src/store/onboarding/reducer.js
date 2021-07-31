const reducer = (state = {step: null}, action) => {
  if (action.type === 'SET_STEP') {
    return {
      ...state,
      steps: action.payload
    }
  } else if (action.type === 'CLOSE') {
    return {
      ...state,
      steps: null
    }
  }
  return state;
}

export default reducer;