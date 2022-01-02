import { createStore, applyMiddleware, compose } from 'redux'
import appReducers from './reducers/index';
import thunk from 'redux-thunk';

const middlewareEnhancer = applyMiddleware(thunk)

const reduxView = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composedEnhancer = compose(middlewareEnhancer, reduxView);

const store = createStore(
   appReducers, 
   composedEnhancer
   )

export default store