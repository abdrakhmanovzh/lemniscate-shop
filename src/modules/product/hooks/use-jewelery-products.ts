import { useAllProducts } from '.'

export const useJeweleryProducts = () => {
  const { data: products } = useAllProducts()

  const jeweleryProducts = products?.documents.filter((product) => product.category === 'jewelery')

  return { jeweleryProducts }
}
