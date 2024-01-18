import { useJeweleryProducts } from '../hooks'
import { ProductCard } from './product-card'

export const JeweleryProducts = () => {
  const { jeweleryProducts } = useJeweleryProducts()

  return (
    <div className="flex flex-wrap justify-between gap-10">
      {jeweleryProducts?.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}
