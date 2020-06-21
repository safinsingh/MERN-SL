import uuid from 'uuid/v4'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
  items: [
    { id: uuid(), name: 'Bruh1' },
    { id: uuid(), name: 'Bruh2' },
    { id: uuid(), name: 'Bruh3' },
    { id: uuid(), name: 'Bruh4' },
  ],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      }
    default:
      return state
  }
}
