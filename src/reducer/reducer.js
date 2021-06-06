import { BREAKFAST_ITEMS, ADD_BREAKFAST_ITEM } from './types'
const initialState = {
  breakFastItems: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BREAKFAST_ITEMS:
      return { ...state, breakFastItems: action.payload }
    case ADD_BREAKFAST_ITEM:
      let maxId = state.breakFastItems[state.breakFastItems.length - 1]?.id + 1

      console.log(
        'reaching here: in ADD_BREAKFAST_ITEM :',
        action.payload,
        state.breakFastItems,
        state.breakFastItems.length - 1,
        maxId,
        action.payload
      )
      return {
        ...state,
        breakFastItems: [
          ...state.breakFastItems,
          { id: maxId, name: action.payload },
        ],
      }
    default:
      return state
  }
}

export default reducer
