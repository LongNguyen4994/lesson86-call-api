import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
   {
      path: '/',
      element: () => <HomePage />
   },
   {
      path: '/home',
      element: () => <HomePage />
   },
   {
      path: '/productList',
      element: () => <ProductListPage />
   },
   {
      path: '/product/add',
      element: () => <ProductActionPage />
   },
   {
      path: '/product/:id/edit',
      element: () => <ProductActionPage />
   },
   {
      path: '*',
      element: () => <NotFoundPage />
   },
];

export default routes;

