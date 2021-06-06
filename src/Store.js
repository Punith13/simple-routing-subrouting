import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer/reducer'

const Store = createStore(reducers, applyMiddleware(thunk))

export default Store
