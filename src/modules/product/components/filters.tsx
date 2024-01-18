import { ColorFilter } from './color-filter'
import { SizesFilter } from './sizes-filter'

export const Filters = () => {
  return (
    <div className="flex flex-col gap-4 pl-[20%]">
      <h3 className="text-xl font-semibold">filter by:</h3>
      <hr />

      <SizesFilter />
      <hr />

      <ColorFilter />
      <hr />
    </div>
  )
}
