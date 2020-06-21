import uuid from 'uuid/v4'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
  items: [
    { id: uuid(), name: 'Bruh' },
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
    default:
      return state
  }
}
