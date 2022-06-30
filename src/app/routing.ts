import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';

import { productsModel } from '@pages/products';

// import { HomePage } from '../pages/home';
// import { PostsList } from '../pages/posts-list';
// import { PostsSingle } from '../pages/posts-single';
// import { NotFound } from '../pages/not-found';

export const routes = [
  { path: '/', route: productsModel.route },
  // { path: '/posts', route: PostsList.route },
  // { path: '/posts/:slug', route: PostsSingle.route },
  // { path: '/404', route: NotFound.route },
];

export const history = createBrowserHistory();

export const router = createHistoryRouter({
  routes,
});

router.setHistory(history);
