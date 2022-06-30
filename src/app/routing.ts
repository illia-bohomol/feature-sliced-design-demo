import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';

import { productsListModel } from '@pages/products-list';
import { productsSingleModel } from '@pages/products-single';

// import { HomePage } from '../pages/home';
// import { PostsList } from '../pages/posts-list';
// import { PostsSingle } from '../pages/posts-single';
// import { NotFound } from '../pages/not-found';

export const routes = [
  { path: '/products', route: productsListModel.route },
  { path: '/products/:id', route: productsSingleModel.route },
  // { path: '/posts/:slug', route: PostsSingle.route },
  // { path: '/404', route: NotFound.route },
];

export const history = createBrowserHistory();

export const router = createHistoryRouter({
  routes,
});

router.setHistory(history);
