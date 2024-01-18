import { WomenProducts, Filters } from '@/modules/product'

export const WomenPage = () => {
  return (
    <div className="grid flex-1 grid-cols-4 gap-10">
      <div className="col-span-1">
        <Filters />
      </div>
      <div className="col-span-3 pb-10 pr-10">
        <WomenProducts />
      </div>
    </div>
  )
}
