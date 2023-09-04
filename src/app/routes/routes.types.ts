import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

export type Route = RouteObject & {
  path: string
  exact?: boolean
  main: () => ReactNode
  sidebar: () => ReactNode
}

export type Routes = Route[]

export const enum PAGES {
  MAIN = '/',
  PROFILE = '/profile',
  FAVORITES = '/favorites',
  AUTH = '/auth',
}