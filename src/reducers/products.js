import * as Types from '../constants/ActionTypes';

let initialState = [];



const products = (state = initialState, action) => {
   // find index of id for update, delelte product.
   let index = -1;
   if (action.id) {
      index = state.findIndex(product => product.id === action.id);
   }

   if (action.product) {
      index = state.findIndex(product => product.id === action.product.id);
   }

   switch (action.type) {
      case Types.GET_PRODUCTS:
         state = action.products;
         return [...state];

      case Types.DELETE_PRODUCT:
         if (index !== -1) {
            state.splice(index, 1);
         }
         return [...state];

      case Types.POST_PRODUCT:
         state.push(action.product);
         return [...state];

      case Types.PUT_PRODUCT:
         console.log(state[index]);
         if (index !== -1) {
            state[index] = action.product;
         }
         console.log(state[index]);
         return [...state];

      default: return [...state];
   }
}

export default products;
