import React from 'react'
import { Button, Badge, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductItem(props) {
   let product = props.product;
   let index = props.index;
   let status = product.status;
   let deleteProduct = props.deleteProduct;


   return (
      <tr style={{ lineHeight: '40px' }}>
         <td>{index + 1}</td>
         <td>{product.id}</td>
         <td>{product.name}</td>
         <td>{product.price}</td>
         <td className={{ textAlign: 'center' }}>
            <Badge pill bg={status ? "info" : "secondary"}>{status ? 'Còn Hàng' : 'Hết Hàng'}</Badge>
         </td>
         <td>
            <Link to={`/product/${product.id}/edit`} className='btn btn-success'>Sửa</Link> &nbsp;
            <Button variant="danger" onClick={() => deleteProduct(product.id)}>Xóa</Button>
         </td>
      </tr>
   )
}

export default ProductItem
