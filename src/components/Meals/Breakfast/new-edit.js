import { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import * as actions from '../../../reducer/action'

const NewEditItem = () => {
  const dispatch = useDispatch()

  const { id } = useParams()
  const history = useHistory()

  const [value, setValue] = useState(undefined)

  const { addBreakFastItem } = bindActionCreators(actions, dispatch)

  const state = useSelector((state) => state)

  useEffect(() => {
    if (id) {
      setValue(
        state.breakFastItems.find((_) => Number(_.id) === Number(id))?.name
      )
    }
  }, [])

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          if (!id) {
            addBreakFastItem(value)
          }

          history.push('/meals/breakfast')
        }}
      >
        {id ? 'Edit' : 'Add'} Item
      </button>
    </>
  )
}

export default NewEditItem
