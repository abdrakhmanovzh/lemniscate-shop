import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet
} from '@/shared/components/ui/sheet'
import { CircleDollarSign, ShoppingCart, Trash } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { useAuthStore } from '@/modules/auth'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

import { CartProduct } from './cart-product'
import { useCartStore } from '..'

export const CartSheet = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const products = useCartStore((state) => state.cart)

  const clearCart = useCartStore((state) => state.clearCart)
  const cart = useCartStore((state) => state.cart)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative h-fit rounded-full bg-neutral-200 p-2" variant={'ghost'}>
          <ShoppingCart size={20} />
          <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-white">
            {cart.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[450px]">
        <SheetHeader>
          <SheetTitle className="text-4xl">cart</SheetTitle>
        </SheetHeader>
        {!isAuthenticated ? (
          <div className="mt-4 flex flex-col gap-2 pt-10">
            <h2 className="text-xl font-semibold">you are not authenticated</h2>
            <p className="text-base">you need to sign in to use cart</p>

            <Button className="mt-6" asChild>
              <Link to="/signin">sign in</Link>
            </Button>
          </div>
        ) : products.length > 0 ? (
          <div className="mt-4 space-y-4">
            {products.map((product) => (
              <Fragment key={product.id}>
                <CartProduct product={product} key={product.id} />
                <hr />
              </Fragment>
            ))}

            <div className="absolute bottom-4 mt-4 space-x-4">
              <Button
                className="mt-4 space-x-2 bg-green-500 hover:bg-green-500 hover:opacity-90"
                asChild
              >
                <Link to="/payment">
                  <CircleDollarSign size={16} />
                  <span>proceed to payment</span>
                </Link>
              </Button>

              <Button className="mt-4 space-x-2" onClick={clearCart}>
                <Trash size={16} />
                <span>clear cart</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">cart is empty</h2>

            <Button className="mt-4" asChild>
              <Link to="/">add items</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
