import { HTTP_METHOD } from '@constants/variables'
import { baseApi } from '../baseApi'
import { UserInfoResponse, UserProfileRequest, UserProfileResponse } from './types'

const USER_INFO_API_PATH = '/users/me/'

export const userApi = baseApi.injectEndpoints({
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
