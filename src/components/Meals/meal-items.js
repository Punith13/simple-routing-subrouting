import { Link } from 'react-router-dom'

const MealItems = (props) => {
  const { match } = props
  return (
    <ul>
      <li>
        <Link to={`${match.path}/breakfast`}>Break fast</Link>
      </li>
      <li>
        <Link to={`${match.path}/lunch`}>Lunch</Link>
      </li>
      <li>
        <Link to={`${match.path}/dinner`}>Dinner</Link>
      </li>
    </ul>
  )
}

export default MealItems
