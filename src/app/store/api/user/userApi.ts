import { HTTP_METHOD } from '@constants/variables'
import { BASE_API_PATH } from '../baseApi'
import { UserInfoResponse, UserProfileRequest, UserProfileResponse } from './types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@app/store/store'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_PATH,
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set('authorization', `token ${token}`)
    }

    return headers
  },
})

const USER_INFO_API_PATH = '/users/me/'

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['USER_INFO'],
  baseQuery,
  endpoints: builder => ({
    fetchUserInfo: builder.query<UserInfoResponse, void>({
      query: () => ({
        url: USER_INFO_API_PATH,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'USER_INFO', id: 'INFO' }],
      }),
    }),
    changeUserProfile: builder.mutation<UserProfileResponse, UserProfileRequest>({
      query: userProfile => ({
        url: USER_INFO_API_PATH,
        method: HTTP_METHOD.PUT,
        body: userProfile,
      }),
      invalidatesTags: [{ type: 'USER_INFO', id: 'INFO' }],
    }),
  }),
})

export const { useFetchUserInfoQuery, useChangeUserProfileMutation } = userApi
