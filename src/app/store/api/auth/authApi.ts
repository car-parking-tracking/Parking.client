import { HTTP_METHOD } from '@constants/variables';
import { baseApi } from '../baseApi';

import { SignInRequestBody, SignUpResponse, SignUpRequestBody } from './types'

const SIGN_IN_API_PATH = '/auth/token/logoin';
const SIGN_UP_API_PATH = '/users';
const LOGOUT_API_PATH = '/auth/token/logout';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<void, SignInRequestBody>({
      query: credentials => ({
        url: SIGN_IN_API_PATH,
        method: HTTP_METHOD.POST,
        body: credentials,
        responseHandler: response => response.text(),
      }),
      invalidatesTags: [{ type: 'USER_INFO', id: 'INFO' }],
    }),
    signUp: builder.mutation<SignUpResponse, SignUpRequestBody>({
      query: credentials => ({
        url: SIGN_UP_API_PATH,
        method: HTTP_METHOD.POST,
        body: credentials,
      }),
      invalidatesTags: [{ type: 'USER_INFO', id: 'INFO' }],
    }),
    logout: builder.mutation<SignUpResponse, void>({
      query: credentials => ({
        url: LOGOUT_API_PATH,
        method: HTTP_METHOD.POST,
        body: credentials,
      }),
      invalidatesTags: [{ type: 'USER_INFO', id: 'INFO' }],
    }),
  })
})

export const { useSignInMutation, useSignUpMutation } = authApi;
