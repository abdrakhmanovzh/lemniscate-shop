import { ProductCard } from './product-card'
import { useMenProducts } from '../hooks'

export const MenProducts = () => {
  const { menProducts } = useMenProducts()

  return (
    <div className="flex flex-wrap justify-between gap-10">
      {menProducts?.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}
