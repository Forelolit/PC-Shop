export const path = {
  home: '/',
  notFound: '*',
  productPage: '/product/:id/:hash',
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
