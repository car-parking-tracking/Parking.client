import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { collectionApi } from './api/collection/collectionApi'
import { CombinedState } from '@reduxjs/toolkit/dist/query/core/apiState'

export interface IReducer {
  baseApi: CombinedState<Record<never, never>, 'USER_INFO', 'baseApi'>
  collectionApi: CombinedState<Record<never, never>, 'COLLECTION_DATA', 'collectionApi'>
}

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [collectionApi.reducerPath]: collectionApi.reducer,
})
