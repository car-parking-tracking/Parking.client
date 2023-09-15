import { PAGES, Routes, SidebarRoutes } from './routes.types'
import {
  AccountWithTitleWrapper,
  AuthForm,
  FavoriteListWithTitle,
  ProfileWithTitle,
  PasswordWithTitle,
  ResetWithTitleWrapper,
  UpdateWithTitleWrapper,
  AboutWithTitleWrapper,
} from '@components/organisms'
import ErrorPage from '@pages/ErrorPage'
import { Navigate } from 'react-router-dom'

//TODO: удалить мок
const favoriteItems = [
  { id: 4648, address: 'ул. Херсонская, дом 32', longitude: 55.748203, latitude: 37.632349 },
  { id: 133, address: 'ул. Каховка, дом 33 к. 1', longitude: 55.74848, latitude: 37.610348 },
  { id: 2412, address: 'ул. Каховка, дом 33 к. 1', longitude: 55.74895, latitude: 37.633599 },
  { id: 2413, address: 'ул. Каховка, дом 33 к. 1', longitude: 55.748709, latitude: 37.632178 },
  { id: 2414, address: 'ул. Каховка, дом 33 к. 1', longitude: 55.748203, latitude: 37.632349 },
  { id: 2415, address: 'ул. Каховка, дом 33 к. 1', longitude: 55.748203, latitude: 37.632349 },
  { id: 2416, address: 'ул. Каховка, дом 33 к. 1', longitude: 55.748203, latitude: 37.632349 },
  { id: 2417, address: 'ул. Каховка, дом 33 к. 1', longitude: 55.748203, latitude: 37.632349 },
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
    sidebar: () => <AboutWithTitleWrapper />,
  },
  {
    path: PAGES.PROFILE,
    sidebar: () => <ProfileWithTitle title="Мой профиль" />,
  },
  {
    path: PAGES.PASSWORD,
    sidebar: () => <PasswordWithTitle title="Изменение пароля" />,
  },
  {
    path: PAGES.FAVORITES,
    sidebar: () => <FavoriteListWithTitle title="Избранное" />,
  },
]

export const SIDEBAR_UNAUTH_ROUTES: SidebarRoutes = [
  {
    path: PAGES.MAIN,
    sidebar: () => <AuthForm />,
  },
  {
    path: PAGES.ABOUT,
    sidebar: () => <AboutWithTitleWrapper />,
  },
  {
    path: PAGES.RESET_PASSWORD,
    sidebar: () => <ResetWithTitleWrapper />,
  },
  {
    path: PAGES.UPDATE_PASSWORD,
    sidebar: () => <UpdateWithTitleWrapper />,
  },
]
