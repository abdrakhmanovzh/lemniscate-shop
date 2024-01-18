import { Button } from '@/shared/components/ui/button'
import { TProduct } from '@/modules/product'
import { Trash } from 'lucide-react'

import { useCartStore } from '..'

interface Props {
  product: TProduct
}

export const CartProduct = ({ product }: Props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const handleRemoveFromCart = () => {
    removeFromCart(product)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-10 w-10">
          <img className="h-10 w-10 object-cover" src={product.image} alt={product.title} />
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-base text-neutral-600">${product.price}</p>
        </div>
      </div>

      <Button onClick={handleRemoveFromCart} variant={'destructive'}>
        <Trash size={16} />
      </Button>
    </div>
  )
}
