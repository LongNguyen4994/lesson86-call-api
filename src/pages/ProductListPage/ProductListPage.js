import React, { useEffect } from 'react'
import ProductList from '../../components/ProductList/ProductList';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as ActionTypes from '../../actions/index';

function ProductListPage(props) {
   let products = props.products;

   useEffect(() => {
      props.getProductsAPI();
   }, []);  // eslint-disable-line

   function showProducts(products) {
      let res = null;
      if (products.length > 0) {
         res = products.map((product, index) => {
            return (
               <ProductItem
                  key={index}
                  product={product}
                  index={index}
                  deleteProduct={(id) => deleteProduct(id)}
               />
            );
         })
      }
      return res;
   }

   function deleteProduct(id) {
      if(confirm('Bạn chắc chắn muốn xóa?')){ //eslint-disable-line
         props.deleteProductAPI(id);
      }
   }


   let productList = showProducts(products);
   let navigate = useNavigate();

   return (
      <div>
         <Container>
            <Row>
               <Col>
                  <Button variant="primary" className='my-3' onClick={() => { navigate('/product/add') }}>
                     Thêm Sản Phẩm
                  </Button>
                  <ProductList>
                     {productList}
                  </ProductList>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      products: state.products,
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      getProductsAPI: () => {
         dispatch(ActionTypes.actGetProductsAPI());
      },
      deleteProductAPI: (id) => {
         dispatch(ActionTypes.actDeleteProductAPI(id));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);


