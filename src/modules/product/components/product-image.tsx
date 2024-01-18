import { useProduct } from '../hooks'

interface Props {
  productId: number
}

export const ProductImage = ({ productId }: Props) => {
  const { product } = useProduct(productId)

  return (
    <div className="relative col-span-3 mx-10 max-h-[550px] ring-2 ring-black">
      <img className="h-full w-full object-contain" alt={product?.title} src={product?.image} />
    </div>
  )
}
