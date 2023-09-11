import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { rootReducer } from './reducer'
import { collectionApi } from './api/collection/collectionApi'
import { geocodeApi } from './api/geocoder/geocoderApi'
import { authApi, lotsApi, userApi } from './api'
import { authSlice } from './slices/authSlice'

const saveToLocalStorage = (state: RootState) => {
  try {
    localStorage.setItem('auth', JSON.stringify(state.auth.isAuth))
  } catch (e) {
    console.error(e)
  }
}

const initialState = {
  auth: authSlice.getInitialState(),
}

export const setupStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        baseApi.middleware,
        collectionApi.middleware,
        geocodeApi.middleware,
        lotsApi.middleware,
        userApi.middleware,
        authApi.middleware
      ),
  })
}

export const store = setupStore(initialState)

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const dispatch = store.dispatch
