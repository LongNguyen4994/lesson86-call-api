import { combineReducers } from 'redux';
import products from './products';
import editedProduct from './editedProduct';

const appReducers = combineReducers({
   products,
   editedProduct,
});

export default appReducers;