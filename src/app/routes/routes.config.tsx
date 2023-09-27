import { PAGES, Routes, SidebarRoutes } from './routes.types'
import {
  AccountWithTitleWrapper,
  FavoriteListWithTitleWrapper,
  ProfileWithTitle,
  PasswordWithTitle,
  ResetWithTitleWrapper,
  UpdateWithTitleWrapper,
  AboutWithTitleWrapper,
} from '@components/organisms'
import { AuthForm } from '@components/molecules'
import ErrorPage from '@pages/ErrorPage'
import { Navigate } from 'react-router-dom'

export const ERROR_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/404" replace />,
  },
  {
    path: PAGES.NOTFOUND,
    main: () => <ErrorPage code={404} text="Страница, которую вы запрашиваете, не существует. Возможно она устарела или была удалена." />,
  },
  {
    path: PAGES.SERVER_ERROR,
    main: () => <ErrorPage code={500} text="При обработке запроса произошла ошибка на сервере или превышен лимит времени обработки." />,
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
    sidebar: () => <FavoriteListWithTitleWrapper />,
  },
]

export const SIDEBAR_UNAUTH_ROUTES: SidebarRoutes = [
  {
    path: PAGES.MAIN,
    sidebar: () => <AuthForm />,
  },
  {
    path: PAGES.ACTIVATION,
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
