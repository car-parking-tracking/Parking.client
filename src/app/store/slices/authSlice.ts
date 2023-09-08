import { createSlice } from '@reduxjs/toolkit'

export type AuthState = {
  isAuth: boolean
}

const initialState = {
  isAuth: JSON.parse(localStorage.getItem('auth') || '{}') || false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true
    },
    logout(state) {
      state.isAuth = false
    },
  },
})

export const { login, logout } = authSlice.actions
export const authReducer = authSlice.reducer
