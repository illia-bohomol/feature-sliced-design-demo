import * as React from 'react';
import { Link, Route, RouterProvider } from 'atomic-router-react';

import { productsListModel, ProductsList } from '@pages/products-list';
import { ProductsSingle, productsSingleModel } from '@pages/products-single';

import { router } from './routing';

export const App = () => {
  return (
    <RouterProvider router={router}>
      <Link to={productsSingleModel.route} params={{ id: '2' }}>
        LInaakldfjlksdjfklsjl
      </Link>
      <Route route={productsListModel.route} view={ProductsList} />
      <Route route={productsSingleModel.route} view={ProductsSingle} />
    </RouterProvider>
  );
};
