import { BASE_URL_DEV, BASE_URL_PROD } from '@constants/environment'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_API_PATH = process.env.NODE_ENV === 'development' ? BASE_URL_DEV : BASE_URL_PROD

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
