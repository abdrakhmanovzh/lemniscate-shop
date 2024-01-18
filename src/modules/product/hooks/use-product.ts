import { useAllProducts } from '.'

export const useProduct = (productId: number) => {
  const { data: products } = useAllProducts()

  const product = products?.documents.find((product) => product.id === productId)

  return { product }
}
