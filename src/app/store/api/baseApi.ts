import { BASE_URL_DEV, BASE_URL_PROD } from '@constants/environment'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_API_PATH = 'https://parkonaft.acceleratorpracticum.ru/api/v1/'

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_API_PATH}`,
  prepareHeaders(headers) {
    return headers
  },
})

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['USER_INFO'],
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
