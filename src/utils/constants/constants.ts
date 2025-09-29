export const path = {
  home: '/',
  notFound: '*',
  productPage: '/product/:id/:hash',
  favoritePage: '/favorite',
  cartPage: '/cart',
};

export const navItems = [
  {
    label: 'Home',
    to: path.home,
    id: 1,
  },
  {
    label: 'Catalog',
    to: path.notFound,
    id: 2,
  },
  {
    label: 'About us',
    to: path.notFound,
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
