import { toast } from '@/shared/components/ui/use-toast'
import { Button } from '@/shared/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/modules/auth'
import { useCartStore } from '@/modules/cart'
import { useState } from 'react'

import { SelectColor } from './select-color'
import { SelectSize } from './select-size'
import { TProduct } from '../entities'

interface Props {
  product: undefined | TProduct
}

export const ProductDetails = ({ product }: Props) => {
  const navigate = useNavigate()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const cart = useCartStore((state) => state.cart)
  const addToCart = useCartStore((state) => state.addToCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const handleAddCart = () => {
    if (!isAuthenticated) {
      navigate('/signin')
    } else {
      if (product) {
        addToCart(product)
        toast({
          description: `${product.title} was added to your cart`,
          title: 'Added to cart'
        })
      }
    }
  }

  const handleRemoveFromCart = () => {
    if (product) removeFromCart(product)
  }

  if (!product) {
    return (
      <div className="col-span-2 flex max-h-[550px] animate-pulse flex-col justify-between bg-neutral-100"></div>
    )
  }

  return (
    <div className="col-span-2 flex max-h-[550px] flex-col justify-between">
      <h1 className="text-3xl font-semibold">{product.title}</h1>

      <div className="flex items-center gap-2">
        <p className="text-lg text-neutral-600">${product.price}</p>
        <div className="bg-neutral-200 px-2 py-1 text-sm font-medium italic">free shipping</div>
      </div>

      <div className="">
        <p className="text-lg text-neutral-600">{product.description}</p>
      </div>

      <SelectColor setSelected={setSelectedColor} selected={selectedColor} />

      <SelectSize setSelected={setSelectedSize} selected={selectedSize} />

      {cart.find((item) => item.id === product.id) ? (
        <Button onClick={handleRemoveFromCart} className="rounded-none py-7" variant="secondary">
          added to cart
        </Button>
      ) : (
        <Button
          disabled={!selectedColor || !selectedSize}
          className="rounded-none py-7"
          onClick={handleAddCart}
        >
          add to cart
        </Button>
      )}
    </div>
  )
}
