export const path = {
  home: '/',
  notFound: '*',
  product: '/product',
  productPage: '/product/:id/:hash',
  favoritePage: '/favorite',
  cartPage: '/cart',
  catalog: '/catalog',
  aboutUs: '/about-us',
};

export const navItems = [
  {
    label: 'Home',
    to: path.home,
    id: 1,
  },
  {
    label: 'Catalog',
    to: path.catalog,
    id: 2,
  },
  {
    label: 'About us',
    to: path.aboutUs,
    id: 3,
  },
];

export const langOptions = [
  {
    id: 1,
    label: 'Рус',
  },
  {
    id: 2,
    label: 'Eng',
  },
];
