/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { YAMAP_API_KEY } from '@constants/environment'

const GEOCODE_API_URL = 'https://geocode-maps.yandex.ru/1.x/'

const geocodeBaseQuery = fetchBaseQuery({ baseUrl: GEOCODE_API_URL })

export const geocodeApi = createApi({
  reducerPath: 'geocodeApi',
  baseQuery: geocodeBaseQuery,
  endpoints: builder => ({
    fetchGeocodeData: builder.query<any, string>({
      query: value => ({
        url: `?apikey=${YAMAP_API_KEY}&geocode=${value}&ll=37.620927,55.751590&spn=0.65,0.65&rspn=1&format=json`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useFetchGeocodeDataQuery } = geocodeApi