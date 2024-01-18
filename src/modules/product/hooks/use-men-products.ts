import { useAllProducts } from '.'

export const useMenProducts = () => {
  const { data: products } = useAllProducts()

  const menProducts = products?.documents.filter((product) => product.category === 'men')

  return { menProducts }
}
