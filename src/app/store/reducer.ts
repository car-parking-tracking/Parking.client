import { combineReducers } from '@reduxjs/toolkit'
import { CombinedState } from '@reduxjs/toolkit/dist/query/core/apiState'
import { baseApi } from './api/baseApi'
import { collectionApi } from './api/collection/collectionApi'
import { geocodeApi } from './api/geocoder/geocoderApi'
import { lotsApi } from './api/lots/lotsApi'
import { AuthState, authReducer } from './slices/authSlice'
import { MapState, mapReducer } from './slices/mapSlice'
import { authApi, userApi } from './api'

export interface IReducer {
  baseApi: CombinedState<Record<never, never>, 'USER_INFO', 'baseApi'>
  auth: AuthState
  map: MapState
  collectionApi: CombinedState<Record<never, never>, 'COLLECTION_DATA', 'collectionApi'>
  geocodeApi: CombinedState<Record<never, never>, 'MAP_INFO', 'geocodeApi'>
  lotsApi: CombinedState<Record<never, never>, 'LOTS_DATA', 'lotsApi'>
  userApi: CombinedState<Record<never, never>, 'USER_INFO', 'userApi'>
  authApi: CombinedState<Record<never, never>, 'USER_INFO', 'authApi'>
}

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  map: mapReducer,
  collectionApi: collectionApi.reducer,
  geocodeApi: geocodeApi.reducer,
  lotsApi: lotsApi.reducer,
  userApi: userApi.reducer,
  authApi: authApi.reducer,
})
