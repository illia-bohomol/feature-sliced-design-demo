import * as React from 'react';
import { Route, RouterProvider } from 'atomic-router-react';
import { productsModel, Products } from '@pages/products';

// import { HomePage } from '../pages/home';
// import { PostsList } from '../pages/posts-list';
// import { PostsSingle } from '../pages/posts-single';
// import { NotFound } from '../pages/not-found';

import { router } from './routing';

export const App = () => {
  return (
    <RouterProvider router={router}>
      <Route route={productsModel.route} view={Products} />
      {/* <Route route={PostsList.route} view={PostsList.Page} /> */}
      {/* <Route route={PostsSingle.route} view={PostsSingle.Page} /> */}
      {/* <Route route={NotFound.route} view={NotFound.Page} /> */}
    </RouterProvider>
  );
};
