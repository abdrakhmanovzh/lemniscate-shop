import { useElectronicsProducts } from '../hooks'
import { ProductCard } from './product-card'

export const ElectronicsProducts = () => {
  const { electronicsProducts } = useElectronicsProducts()

  return (
    <div className="flex flex-wrap items-center justify-between gap-10">
      {electronicsProducts?.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}
