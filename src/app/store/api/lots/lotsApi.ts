import { HTTP_METHOD } from '@constants/variables'
import { baseApi } from '../baseApi'
import { ILot } from './types'

const LOTS_API_PATH = 'parking_lots/'

export const lotsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchLotById: builder.query<ILot, number>({
      query: (id?: number) => ({
        url: `${LOTS_API_PATH}${id}/`,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'LOTS_DATA', id: 'INFO' }],
      }),
    }),
  }),
})

export const { useFetchLotByIdQuery } = lotsApi
