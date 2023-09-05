import { combineReducers } from '@reduxjs/toolkit'
import { CombinedState } from '@reduxjs/toolkit/dist/query/core/apiState'
import { baseApi } from './api/baseApi'
import { collectionApi } from './api/collection/collectionApi'
import { geocodeApi } from './api/geocoder/geocoderApi'
import { lotsApi } from './api/lots/lotsApi'
import { AuthState, authReducer } from './slices/authSlice'

export interface IReducer {
  baseApi: CombinedState<Record<never, never>, 'USER_INFO', 'baseApi'>
  auth: AuthState
  collectionApi: CombinedState<Record<never, never>, 'COLLECTION_DATA', 'collectionApi'>
  geocodeApi: CombinedState<Record<never, never>, 'INFO', 'geocodeApi'>
  lotsApi: CombinedState<Record<never, never>, 'LOTS_DATA', 'lotsApi'>
}

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  collectionApi: collectionApi.reducer,
  geocodeApi: geocodeApi.reducer,
  lotsApi: lotsApi.reducer,
})
