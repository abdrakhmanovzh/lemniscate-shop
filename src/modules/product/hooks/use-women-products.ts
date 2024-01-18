import { useAllProducts } from '.'

export const useWomenProducts = () => {
  const { data: products } = useAllProducts()

  const womenProducts = products?.documents.filter((product) => product.category === 'women')

  return { womenProducts }
}
