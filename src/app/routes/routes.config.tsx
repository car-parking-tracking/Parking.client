import MainPage from '@pages/MainPage'
import { PAGES, Routes } from './routes.types'
import { Account, AuthForm, FavoriteList, UserProfile } from '@components/organisms'

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
    path: PAGES.AUTH,
    main: () => <MainPage />,
    sidebar: () => <AuthForm />,
  },
]
