import { HTTP_METHOD } from '@constants/variables'
import { baseApi } from '../baseApi'
import { ILotCollection, ILotItem } from './types'

const LOTS_API_PATH = 'parking_lots'

export const lotsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchLotById: builder.query<ILotItem, number>({
      query: (id: number) => ({
        url: `${LOTS_API_PATH}/${id}/`,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'LOTS_DATA', id: 'INFO' }],
      }),
    }),
    fetchLotsIdCollection: builder.query<ILotCollection, string>({
      query: (id: string) => ({
        url: `${LOTS_API_PATH}/?search=${id}`,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'LOTS_DATA', id: 'INFO' }],
      })
    })
  }),
})

export const { useFetchLotByIdQuery, useFetchLotsIdCollectionQuery } = lotsApi
