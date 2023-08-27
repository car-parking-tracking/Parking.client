import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { rootReducer } from './reducer'
import { collectionApi } from './api/collection/collectionApi'
import { geocodeApi } from './api/geocoder/geocoderApi'
import { lotsApi } from './api'

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware, collectionApi.middleware, geocodeApi.middleware, lotsApi.middleware),
  })
}

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const dispatch = store.dispatch
