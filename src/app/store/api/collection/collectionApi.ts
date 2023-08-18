import { HTTP_METHOD } from '@constants/variables'
import { baseApi } from '../baseApi'
import { IFeatureCollection } from './types'

const COLLECTION_API_PATH = 'feature_collection/'

export const collectionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchFeatureCollection: builder.query<IFeatureCollection, void>({
      query: () => ({
        url: COLLECTION_API_PATH,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'COLLECTION_DATA', id: 'INFO' }],
      }),
    }),
    fetchFeatureIdCollection: builder.query<IFeatureCollection, number>({
      query: (id: number) => ({
        url: `${COLLECTION_API_PATH}/${id}`,
        method: HTTP_METHOD.GET,
        providesTags: [{ type: 'COLLECTION_DATA', id: 'INFO' }],
      }),
    }),
  }),
})

export const { useFetchFeatureCollectionQuery, useFetchFeatureIdCollectionQuery } = collectionApi
