import { useAllProducts } from '.'

export const useEverydayProducts = () => {
  const { data: products, isLoading } = useAllProducts()

  const everydayProducts = products?.documents?.filter((product) => {
    return product.flags?.includes('everyday')
  })

  return { everydayProducts, isLoading }
}
