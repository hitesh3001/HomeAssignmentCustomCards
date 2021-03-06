
import cardData from '../cardData.json'
import { FETCH_CARDS, DELETE_CARD } from '../constants/actionConstants'

export const fetchCards = () => {
  return dispatch => {
    dispatch({
      type: FETCH_CARDS,
      data: cardData
    })
  }
}

export const deleteCard = (index) => {
  return dispatch => {
    dispatch({
      type: DELETE_CARD,
      data: index
    })
  }
}