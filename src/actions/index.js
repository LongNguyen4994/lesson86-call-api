import * as Types from '../constants/ActionTypes';
import callAPI from '../utils/apiCaller';

// get product
export const actGetProductsAPI = () => {
   return (dispatch) => {
      return callAPI('products', 'GET', null).then(res => {
         dispatch(actGetProducts(res.data))
      });
   }
}

export const actGetProducts = (products) => {
   return {
      type: Types.GET_PRODUCTS,
      products
   }
}

// delete product
export const actDeleteProductAPI = (id) => {
   return dispatch => {
      return callAPI(`products/${id}`, 'DELETE', null).then(res => {
         dispatch(actDeleteProduct(id))
      });
   }
}

export const actDeleteProduct = (id) => {
   return {
      type: Types.DELETE_PRODUCT,
      id
   }
}

// post product
export const actPostProductAPI = (product) => {
   return dispatch => {
      return callAPI('products', 'POST', product).then(res => {
         if (res.data) {
            dispatch(actPostProduct(res.data));
            alert('Thêm thành công!');
         }
      });
   }
}

export const actPostProduct = (product) => {
   return {
      type: Types.POST_PRODUCT,
      product
   }
}


//get updated product
export const actGetProductAPI = (id) => {
   return dispatch => {
      return callAPI(`products/${id}`, 'GET', null).then(res => {
         dispatch(actGetProduct(res.data));
      });
   }
}

export const actGetProduct = (product) => {
   return {
      type: Types.EDITED_PRODUCT,
      product
   }
}


// update
export const actPutProductAPI = (product) => {
   return dispatch => {
      return callAPI(`products/${product.id}`, 'PUT', product).then(res => {
         if (res.data){
            dispatch(actPutProduct(res.data));
            alert('Cập nhật thành công!')
         }
      });
   }
}



export const actPutProduct = (product) => {
   return {
      type: Types.PUT_PRODUCT,
      product
   }
}