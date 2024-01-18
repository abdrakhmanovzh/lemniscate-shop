import { useAllProducts } from '.'

export const useElectronicsProducts = () => {
  const { data: products } = useAllProducts()

  const electronicsProducts = products?.documents.filter(
    (product) => product.category === 'electronics'
  )

  return { electronicsProducts }
}
