import { externalApi, productsURL } from '@/modules/core/api'
import { TAPIResponse } from '@/modules/core/entities'
import { useQuery } from '@tanstack/react-query'

import { TProduct } from '../entities'

export const useAllProducts = () => {
  return useQuery({
    queryFn: async () => {
      const response = await externalApi.get<TAPIResponse<TProduct>>(`${productsURL}/documents`)
      return response.data
    },
    queryKey: ['products']
  })
}
