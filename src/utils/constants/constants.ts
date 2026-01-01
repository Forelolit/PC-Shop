export const path = {
  home: '/',
  notFound: '*',
  product: '/product',
  productPage: '/product/:id/:hash',
  favoritePage: '/favorite',
  cartPage: '/cart',
  catalog: '/catalog',
  aboutUs: '/about-us',
  registration: '/registration',
  login: '/login',
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

export const filter = [
  {
    id: 1,
    label: 'Первые по очереди добавления',
    value: 'firstOrder',
  },
  {
    id: 2,
    label: 'Последние по очереди добавления',
    value: 'lastOrder',
  },
  {
    id: 3,
    label: 'Наибольшая цена',
    value: 'biggestPrice',
  },
  {
    id: 4,
    label: 'Наименьшая цена',
    value: 'lowestPrice',
  },
  {
    id: 5,
    label: 'По рейтингу',
    value: 'rating',
  },
];
