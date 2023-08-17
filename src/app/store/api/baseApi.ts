import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_API_PATH = 'http://91.226.83.42/api/v1/'

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_API_PATH}`,
})

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
