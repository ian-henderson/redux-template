import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk, api))
)

export default configureStore
