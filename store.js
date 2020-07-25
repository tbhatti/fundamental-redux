import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './reducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  userReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;