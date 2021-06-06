import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Meals from './components/Meals'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <Link to="/meals">Meals</Link>
        </div>

        <div className="content">
          <Switch>
            <Route path="/meals" component={Meals} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
