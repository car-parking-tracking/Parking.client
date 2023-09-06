import MainPage from '@pages/MainPage'
import { PAGES, Routes } from './routes.types'
import { Account, AuthForm, FavoriteList, UserProfile } from '@components/organisms'
import ErrorPage from '@pages/ErrorPage'
import AboutPage from '@pages/About'

//TODO: удалить мок
const favoriteItems = [
  { id: 2402, address: 'ул. Херсонская, дом 32' },
  { id: 2411, address: 'ул. Каховка, дом 33 к. 1' },
  { id: 2412, address: 'ул. Каховка, дом 33 к. 1' },
  { id: 2413, address: 'ул. Каховка, дом 33 к. 1' },
  { id: 2414, address: 'ул. Каховка, дом 33 к. 1' },
  { id: 2415, address: 'ул. Каховка, дом 33 к. 1' },
  { id: 2416, address: 'ул. Каховка, дом 33 к. 1' },
  { id: 2417, address: 'ул. Каховка, дом 33 к. 1' },
]

export const MAIN_ROUTES: Routes = [
  {
    path: PAGES.MAIN,
    exact: true,
    main: () => <MainPage />,
    sidebar: () => <Account />,
  },
  {
    path: PAGES.ABOUT,
    main: () => <AboutPage />,
    sidebar: () => <Account />,
  },
  {
    path: PAGES.PROFILE,
    main: () => <MainPage />,
    sidebar: () => <UserProfile />,
  },
  {
    path: PAGES.FAVORITES,
    main: () => <MainPage />,
    sidebar: () => <FavoriteList items={favoriteItems} />,
  },
  {
    path: PAGES.NOTFOUND,
    main: () => <ErrorPage code={404} text="Неправильно набран адрес или такой страницы не существует." />,
    sidebar: () => <Account />,
  },
  {
    path: PAGES.SERVER_ERROR,
    main: () => <ErrorPage code={500} text="Internal server error. Кажется что-то пошло не так!" />,
    sidebar: () => <Account />,
  },
]

export const UNAUTHORIZED: Routes = [
  {
    path: PAGES.MAIN,
    exact: true,
    main: () => <MainPage />,
    sidebar: () => <AuthForm />,
  },
  {
    path: PAGES.NOTFOUND,
    main: () => <ErrorPage code={404} text="Неправильно набран адрес или такой страницы не существует." />,
    sidebar: () => <AuthForm />,
  },
  {
    path: PAGES.SERVER_ERROR,
    main: () => <ErrorPage code={500} text="Internal server error. Кажется что-то пошло не так!" />,
    sidebar: () => <AuthForm />,
  },
  {
    path: PAGES.ABOUT,
    main: () => <AboutPage />,
    sidebar: () => <AuthForm />,
  },
]
