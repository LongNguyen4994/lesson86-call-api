import * as Types from '../constants/ActionTypes';

let initialState = {};

const editedProduct = (state = initialState, action) => {
   switch (action.type) {
      case Types.EDITED_PRODUCT:
         state = action.product;
         console.log(state);
         return {...state};

      default: return { ...state };
   }
}

export default editedProduct;