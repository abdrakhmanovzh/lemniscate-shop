import { JeweleryProducts, Filters } from '@/modules/product'

export const JeweleryPage = () => {
  return (
    <div className="grid flex-1 grid-cols-4 gap-10">
      <div className="col-span-4 lg:col-span-1">
        <Filters />
      </div>
      <div className="col-span-4 pb-10 lg:col-span-3 lg:pr-10">
        <JeweleryProducts />
      </div>
    </div>
  )
}
