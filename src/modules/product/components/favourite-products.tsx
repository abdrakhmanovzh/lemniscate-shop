import { TabsContent, TabsTrigger, TabsList, Tabs } from '@/shared/components/ui/tabs'

import { useActivityProducts, useEverydayProducts } from '../hooks'
import { FavouriteProductCard } from './favourite-product-card'

export const FavouriteProducts = () => {
  const { isLoading: everydayProductsLoading, everydayProducts } = useEverydayProducts()
  const { isLoading: activityProductsLoading, activityProducts } = useActivityProducts()

  return (
    <section className="flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">our favourites</h1>

      <Tabs className="w-full px-[10%]" defaultValue="everyday">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="everyday">
            for everyday
          </TabsTrigger>
          <TabsTrigger className="w-full" value="activity">
            for activity
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="mt-10 flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-0"
          value="everyday"
        >
          {everydayProductsLoading && (
            <div className="h-96 w-80 animate-pulse border-2 border-black bg-neutral-100"></div>
          )}

          {everydayProducts &&
            everydayProducts.map((product) => (
              <FavouriteProductCard product={product} key={product.id} />
            ))}
        </TabsContent>
        <TabsContent
          className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-0"
          value="activity"
        >
          {activityProductsLoading && (
            <div className="h-96 w-80 animate-ping bg-neutral-300 shadow-md"></div>
          )}

          {activityProducts &&
            activityProducts.map((product) => (
              <FavouriteProductCard product={product} key={product.id} />
            ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}
