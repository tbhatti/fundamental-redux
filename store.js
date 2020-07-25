import { createStore, combineReducers, applyMiddleware } from 'redux'
import todoReducer from './reducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  todoReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;