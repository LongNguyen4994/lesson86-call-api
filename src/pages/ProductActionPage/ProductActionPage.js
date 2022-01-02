import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ActionTypes from '../../actions/index';

function ProductActionPage(props) {
   let params = useParams();
   let navigate = useNavigate();
   let editedProduct = props.editedProduct;

   const [id, setId] = useState(null);
   const [name, setName] = useState('');
   const [price, setPrice] = useState(0);
   const [status, setStatus] = useState(false);

   useEffect(() => {
      if (params.id) {
         props.getEditedProduct(params.id);
      }
   }, [params.id])  //eslint-disable-line

   useEffect(() => {
      if (editedProduct.id) {
         setId(editedProduct.id);
         setName(editedProduct.name);
         setPrice(editedProduct.price);
         setStatus(editedProduct.status);
      }
   }, [editedProduct])  //eslint-disable-line

   function handleSubmit(event) {
      event.preventDefault();
      let data = { id: id, name: name, price: +price, status: status };
      if (params.id) {
         props.updateProduct(data);
      } else {
         props.addProduct(data);
      }
      navigate(-1);  // go back to url of productList
   }


   return (
      <Container className='my-5'>
         <Form style={{ width: '50%' }} onSubmit={(event) => handleSubmit(event)}>
            <Form.Group as={Row} className="mb-3" controlId="name">
               <Form.Label column sm="3">
                  Tên Sản Phẩm
               </Form.Label>
               <Col sm="9">
                  <Form.Control
                     type='text'
                     name='name234234'
                     value={name}
                     placeholder="Tên sản phẩm"
                     onChange={(event) => setName(event.target.value)}
                  />
               </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="price">
               <Form.Label column sm="3">
                  Giá
               </Form.Label>
               <Col sm="9">
                  <Form.Control
                     type="number"
                     name='price'
                     value={price}
                     placeholder="Giá"
                     onChange={(event) => setPrice(event.target.value)}
                  />
               </Col>
            </Form.Group>
            <Form.Group>
               <Form.Check
                  type='checkbox'
                  id='status'
                  name='status'
                  checked={status}
                  label='Còn Hàng'
                  onChange={(event) => setStatus(event.target.checked)}
               />
            </Form.Group>
            <br />
            <Link to='/productList' className='btn btn-warning'>Trở lại</Link>
            <Button variant="primary" type="submit" className='mx-2'>
               Submit
            </Button>
         </Form>
      </Container>
   )
}

const mapStateToProps = (state) => {
   return {
      editedProduct: state.editedProduct,
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      addProduct: (product) => {
         dispatch(ActionTypes.actPostProductAPI(product));
      },
      getEditedProduct: (id) => {
         dispatch(ActionTypes.actGetProductAPI(id));
      },
      updateProduct: (product) => {
         dispatch(ActionTypes.actPutProductAPI(product));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
