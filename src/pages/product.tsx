import { ProductDetails, ProductImage } from '@/modules/product'
import { useProduct } from '@/modules/product/hooks'
import { useParams } from 'react-router-dom'

export const ProductPage = () => {
  const { id } = useParams()

  const { product } = useProduct(Number(id))

  return (
    <div className="grid flex-1 grid-cols-5 px-[10%]">
      <ProductImage productId={Number(id)} />

      <ProductDetails product={product} />
    </div>
  )
}
