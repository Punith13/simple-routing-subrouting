import { Route, Switch } from 'react-router-dom'
import MealItems from './meal-items'
import Breakfast from './Breakfast'

const Meals = (props) => {
  const { match } = props

  return (
    <Switch>
      <Route exact path={match.path} component={MealItems} />
      <Route path={`${match.path}/breakfast`} component={Breakfast} />
    </Switch>
  )
}

export default Meals
