import { SecondHero, Email, Hero } from '@/modules/core/components'
import { FavouriteProducts } from '@/modules/product'

export const HomePage = () => {
  return (
    <>
      <Hero />

      <FavouriteProducts />

      <SecondHero />

      <Email />
    </>
  )
}
