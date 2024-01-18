import { TProduct } from '@/modules/product/entities'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

interface CartStore {
  removeFromCart: (product: TProduct) => void
  addToCart: (product: TProduct) => void
  clearCart: () => void
  cart: TProduct[]
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      removeFromCart: (product) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      clearCart: () => set({ cart: [] }),
      cart: []
    }),
    {
      name: 'cart-storage'
    }
  )
)
