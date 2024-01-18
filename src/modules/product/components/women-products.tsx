import { ProductCard } from './product-card'
import { useWomenProducts } from '../hooks'

export const WomenProducts = () => {
  const { womenProducts } = useWomenProducts()

  return (
    <div className="flex flex-wrap justify-between gap-10">
      {womenProducts?.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}
