import { CategoryFilter } from './category-filter'
import { useSearchStore } from '../hooks'

export const SearchFilters = () => {
  const setCategory = useSearchStore((state) => state.setCategory)

  return (
    <div className="flex flex-col gap-4 pl-[5%] lg:pl-[20%]">
      <h3 className="text-xl font-semibold">filter by:</h3>
      <hr />

      <CategoryFilter setCategory={setCategory} />
    </div>
  )
}
