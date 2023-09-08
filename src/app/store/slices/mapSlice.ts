import { createSlice } from '@reduxjs/toolkit'

export type MapState = {
  zoom: number
  coords: number[]
  portal: boolean
  id: number
}

const initialState = {
  zoom: 16,
  coords: [55.751774, 37.61838],
  portal: false,
  id: 0
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setZoom(
      state,
      action: {
        type: string
        payload: number
      }
    ) {
      state.zoom = action.payload
    },
    setCoords(
      state,
      action: {
        type: string
        payload: number[]
      }
    ) {
      state.coords = action.payload
    },
    setPortal(
      state,
      action: {
        type: string
        payload: boolean
      }
    ) {
      state.portal = action.payload
    },
    setParkingId(
      state,
      action: {
        type: string
        payload: number
      }
    ) {
      state.id = action.payload
    },
  },
})

export const { setZoom, setCoords, setPortal, setParkingId } = mapSlice.actions
export const mapReducer = mapSlice.reducer
