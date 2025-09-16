import { Layout } from '@app/layout';
import * as Pages from '@pages/index';
import { path } from '@utils/constants/constants';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: path.home,
        element: <Pages.HomePage />,
      },
      {
        path: path.notFound,
        element: <Pages.NotFoundPage />,
      },
      {
        path: path.productPage,
        element: <Pages.ProductPage />,
      },
    ],
  },
]);
