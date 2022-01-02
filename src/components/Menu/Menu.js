import React from 'react'
import { Navbar, Nav, FormControl, Button, Form, Stack } from 'react-bootstrap';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

function Menu() {
   return (
      <div>
         <Navbar bg="primary" variant="dark" className='px-3'>
            <Navbar.Brand href="#home">CALL API</Navbar.Brand>
            <Nav className="mr-auto">
               <CustomLink to='/home'>Trang Chủ</CustomLink>
               <CustomLink to='/productList'>Sản Phẩm</CustomLink>
               <CustomLink to='/product/add'>Pricing</CustomLink>
               {/* <Button>
                  <NavLink to='/home'>Trang Chủ</NavLink>
               </Button>
               <Button>
                  <NavLink to='/productList'>Sản Phẩm</NavLink>
               </Button>
               <Button>
                  <NavLink to='/product/add'>Pricing</NavLink>
               </Button> */}
            </Nav>
            <Form className='ms-auto'>
               <Stack direction='horizontal' gap={2}>
                  <FormControl type="text" placeholder="Search" />
                  <Button variant="outline-light">Search</Button>
               </Stack>
            </Form>
         </Navbar>
      </div>
   )
}

export default Menu

// custom active Link for Navbar
function CustomLink({ children, to, ...props }) {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });

   return (
      <Link
         to={to}
         // style={{ color: 'white', textDecoration: 'none' }}
         className={`btn btn-outline-primary menu-item ${match && ' active'}`}
         {...props}
      >
         {children}
      </Link>
   );
}
