import { combineReducers } from '@reduxjs/toolkit'
import { CombinedState } from '@reduxjs/toolkit/dist/query/core/apiState'
import { baseApi } from './api/baseApi'
import { collectionApi } from './api/collection/collectionApi'
import { geocodeApi } from './api/geocoder/geocoderApi'

export interface IReducer {
  baseApi: CombinedState<Record<never, never>, 'USER_INFO', 'baseApi'>
  collectionApi: CombinedState<Record<never, never>, 'COLLECTION_DATA', 'collectionApi'>
  geocodeApi: CombinedState<Record<never, never>, 'INFO', 'geocodeApi'>
}

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [collectionApi.reducerPath]: collectionApi.reducer,
  [geocodeApi.reducerPath]: geocodeApi.reducer,
})
