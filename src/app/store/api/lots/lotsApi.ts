import { HTTP_METHOD } from '@constants/variables'
import { baseApi } from '../baseApi'
import { ILotCollection, ILotItem, ILotSearchCollection, LotsFavoriteResponse, LotsFavoriteRequest } from './types'

const LOTS_API_PATH = 'parking_lots'

export const lotsApi = baseApi.enhanceEndpoints({ addTagTypes: ['LOTS_DATA'] }).injectEndpoints({
  endpoints: builder => ({
    fetchLotById: builder.query<ILotItem, number>({
      query: (id: number) => ({
        url: `${LOTS_API_PATH}/${id}/`,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'LOTS_DATA', id: 'INFO' }],
      }),
    }),
    updateFavoriteStatus: builder.mutation<LotsFavoriteResponse, LotsFavoriteRequest>({
      query: data => ({
        url: `${LOTS_API_PATH}/${data.id}/favorite/`,
        method: HTTP_METHOD.POST,
        body: data,
        headers: {
          authorization: `token ${data.token}`,
        },
      }),
      invalidatesTags: [{ type: 'LOTS_DATA', id: 'INFO' }],
    }),
    fetchLotsIdCollection: builder.query<ILotSearchCollection[], string>({
      query: (id: string) => ({
        url: `${LOTS_API_PATH}/?search=${id}`,
        method: HTTP_METHOD.GET,
        providesTags: (result: ILotSearchCollection[]) =>
          result
            ? [...result.map(({ id }: { id: number }) => ({ type: 'LOTS_DATA' as const, id })), { type: 'LOTS_DATA', id: 'INFO' }]
            : [{ type: 'LOTS_DATA', id: 'INFO' }],
      }),
      transformResponse: (response: ILotCollection): ILotSearchCollection[] => {
        return response.results.map((lot: ILotItem) => {
          const nameParking = `Парковка № ${lot.id}`
          return {
            name: nameParking,
            description: lot.address,
            coords: [lot.latitude, lot.longitude],
            id: lot.id,
          }
        })
      },
    }),
  }),
})

export const { useFetchLotByIdQuery, useFetchLotsIdCollectionQuery, useUpdateFavoriteStatusMutation } = lotsApi
