import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../../../reducer/action'

const ViewItems = (props) => {
  const { match } = props

  const dispatch = useDispatch()

  const { getBreakFastItems } = bindActionCreators(actions, dispatch)

  const state = useSelector((state) => state)

  useEffect(() => {
    !state.breakFastItems.length && getBreakFastItems()
  }, [])

  const getItems = () => {
    return state.breakFastItems.map((_) => {
      return (
        <li key={_.id}>
          <Link to={`${match.path}/edit/${_.id}`}>{_.name}</Link>
        </li>
      )
    })
  }

  return (
    <>
      <button>
        <Link to={`${match.path}/add`}>Add</Link>
      </button>
      <ul>{getItems()}</ul>
    </>
  )
}

export default ViewItems
