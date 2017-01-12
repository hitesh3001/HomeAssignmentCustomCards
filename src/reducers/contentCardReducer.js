import { FETCH_CARDS, DELETE_CARD } from '../constants/actionConstants'

const initialState = {
    contentCardData : [],
};

const deleteCard = (state, action) => {
  let cardArray = state.contentCardData.filter(data => action.data != data.id)
  return {
    ...state,
    contentCardData: cardArray
  }
}

const contentCardReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CARDS:
      return {
        ...state,
        contentCardData: action.data
      }
    case DELETE_CARD:
      return deleteCard(state, action)
    default:
      return state;
  }
}

export default contentCardReducer