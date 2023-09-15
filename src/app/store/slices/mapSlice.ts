import { useAppSelector } from '@app/hooks/redux'
import { createSlice } from '@reduxjs/toolkit'

export type MapState = {
  zoom: number
  coords: number[]
  portal: boolean
  id: number
  yamap: object
}

const initialState = {
  zoom: 16,
  coords: [55.751774, 37.61838],
  portal: false,
  id: 0,
  yamap: {},
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap(
      state,
      action: {
        type: string
        payload: object
      }
    ) {
      state.yamap = action.payload
    },
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

export const { setZoom, setCoords, setPortal, setParkingId, setMap } = mapSlice.actions
export const mapReducer = mapSlice.reducer
export const useMapSlice = () => useAppSelector(state => state.map)
