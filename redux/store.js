import { applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'

// middleware goes here...
//let finalCreateStore = compose(
//    applyMiddleware(createLogger())
//)(createStore)
//let finalCreateStore = createStore

//const store = createStore(
//    reducer,
//    applyMiddleware(logger)
//)

//export default function configureStore(initialState = { todos: [] }) {
//    return finalCreateStore(reducer, initialState)
//} 

export default function configureStore(initialState = { todos: [], user: {} }) {
    return createStore(rootReducer, initialState, applyMiddleware(logger))
} 