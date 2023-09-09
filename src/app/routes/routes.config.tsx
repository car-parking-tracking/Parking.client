import { PAGES, Routes, SidebarRoutes } from './routes.types'
import { AccountWithTitleWrapper, AuthForm, FavoriteListWithTitle, ProfileWithTitle } from '@components/organisms'
import ErrorPage from '@pages/ErrorPage'
import AboutPage from '@pages/About'
import { Navigate } from 'react-router-dom'

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

export const ERROR_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/404" replace />,
  },
  {
    path: PAGES.NOTFOUND,
    main: () => (
      <ErrorPage code={404} text="Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела или была удалена." />
    ),
  },
  {
    path: PAGES.SERVER_ERROR,
    main: () => <ErrorPage code={500} text="Internal server error. Кажется что-то пошло не так!" />,
  },
]

export const SIDEBAR_AUTH_ROUTES: SidebarRoutes = [
  {
    path: PAGES.MAIN,
    sidebar: () => <AccountWithTitleWrapper />,
  },
  {
    path: PAGES.ABOUT,
    sidebar: () => <AboutPage />,
  },
  {
    path: PAGES.PROFILE,
    sidebar: () => <ProfileWithTitle title="Профиль" />,
  },
  {
    path: PAGES.FAVORITES,
    sidebar: () => <FavoriteListWithTitle title="Избранное" items={favoriteItems} />,
  },
]

export const SIDEBAR_UNAUTH_ROUTES: SidebarRoutes = [
  {
    path: PAGES.MAIN,
    sidebar: () => <AuthForm />,
  },
  {
    path: PAGES.ABOUT,
    sidebar: () => <AboutPage />,
  },
]
