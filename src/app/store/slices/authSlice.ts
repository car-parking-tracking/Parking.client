import { createSlice } from '@reduxjs/toolkit'

export type AuthState = {
  user: {
    isAuth: boolean
  }
}

const initialState = {
  user: {
    isAuth: false,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(
      state,
      action: {
        type: string
        payload: boolean
      }
    ) {
      state.user.isAuth = action.payload
    },
  },
})

export const { setIsAuth } = authSlice.actions
export const authReducer = authSlice.reducer
