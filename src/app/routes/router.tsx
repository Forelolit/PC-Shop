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
      {
        path: path.cartPage,
        element: <Pages.CartPage />,
      },
      {
        path: path.favoritePage,
        element: <Pages.FavoritePage />,
      },
      {
        path: path.catalog,
        element: <Pages.CatalogPage />,
      },
      {
        path: path.aboutUs,
        element: <Pages.AboutUsPage />,
      },
      {
        path: path.registration,
        element: <Pages.RegistrationPage />,
      },
      {
        path: path.login,
        element: <Pages.LoginPage />,
      },
    ],
  },
]);
