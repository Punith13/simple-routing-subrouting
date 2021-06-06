import { breakfastItems } from '../mockfunctions'
import { BREAKFAST_ITEMS, ADD_BREAKFAST_ITEM } from './types'

export const getBreakFastItems = () => async (dispatch) => {
  const items = await breakfastItems()

  dispatch({
    type: BREAKFAST_ITEMS,
    payload: items,
  })
}

export const addBreakFastItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_BREAKFAST_ITEM,
    payload: item,
  })
}
