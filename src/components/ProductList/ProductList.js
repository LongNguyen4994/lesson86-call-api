import React from 'react'
import { Table, Card } from 'react-bootstrap';
import ProductItem from '../ProductItem/ProductItem';

function ProductList(props) {
   let productList = props.children;
   return (
      <div>
         <Card border='primary'>
            <Card.Header as="h5" className='bg-primary text-white'>DANH SÁCH SẢN PHẨM</Card.Header>
            <Card.Body>
               <Table striped bordered hover responsive className='text-center justify-content-center'>
                  <thead>
                     <tr>
                        <th>STT</th>
                        <th>MÃ</th>
                        <th>TÊN</th>
                        <th>GIÁ</th>
                        <th>TRẠNG THÁI</th>
                        <th>HÀNH ĐỘNG</th>
                     </tr>
                  </thead>
                  <tbody>
                     {productList}         
                  </tbody>
               </Table>
            </Card.Body>
         </Card>
      </div>
   )
}

export default ProductList
