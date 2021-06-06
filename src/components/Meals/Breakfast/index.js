import { Route, Switch } from 'react-router-dom'
import ViewItems from './view-items'
import NewEdit from './new-edit'

const Breakfast = (props) => {
  const { match } = props

  return (
    <Switch>
      <Route exact path={match.path} component={ViewItems} />
      <Route exact path={`${match.path}/add`} component={NewEdit} />
      <Route exact path={`${match.path}/edit/:id`} component={NewEdit} />
    </Switch>
  )
}

export default Breakfast
