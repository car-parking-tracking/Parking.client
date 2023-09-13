import { HTTP_METHOD } from '@constants/variables'
import { baseApi } from '../baseApi'
import { UserInfoResponse, UserProfileRequest, UserProfileResponse } from './types'

const USER_INFO_API_PATH = '/users/me/'

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchUserInfo: builder.query<UserInfoResponse, string>({
      query: (token: string) => ({
        url: USER_INFO_API_PATH,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'USER_INFO', id: 'INFO' }],
        headers: {
          authorization: `token ${token}`,
        },
      }),
    }),
    changeUserProfile: builder.mutation<UserProfileResponse, UserProfileRequest>({
      query: (userProfile) => ({
        url: USER_INFO_API_PATH,
        method: HTTP_METHOD.PUT,
        body: userProfile,
        headers: {
          authorization: `token 2a37fbb78018c637d7130b33ec23b18ca7fdc244`,
        },
      }),
      invalidatesTags: [{ type: 'USER_INFO', id: 'INFO' }],
    }),
  }),
})

export const { useFetchUserInfoQuery, useChangeUserProfileMutation } = userApi
