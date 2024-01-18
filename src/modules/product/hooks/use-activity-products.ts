import { useAllProducts } from '.'

export const useActivityProducts = () => {
  const { data: products, isLoading } = useAllProducts()

  const activityProducts = products?.documents?.filter((product) => {
    return product.flags?.includes('activity')
  })

  return { activityProducts, isLoading }
}
