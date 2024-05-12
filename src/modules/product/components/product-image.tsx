import { useProduct } from '../hooks'

interface Props {
  productId: number
}

export const ProductImage = ({ productId }: Props) => {
  const { product } = useProduct(productId)

  return (
    <div className="relative col-span-3 max-h-[550px] ring-2 ring-black lg:mx-10">
      <img className="h-full w-full object-contain" alt={product?.title} src={product?.image} />
    </div>
  )
}
