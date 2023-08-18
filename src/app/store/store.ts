import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { rootReducer } from './reducer'
import { collectionApi } from './api/collection/collectionApi'

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware, collectionApi.middleware),
  })
}

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const dispatch = store.dispatch
