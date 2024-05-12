import { Input } from '@/shared/components/ui/input'
import { SearchFilters } from '@/modules/product'
import debounce from 'lodash/debounce'
import { useState } from 'react'

import { SearchProducts } from './search-products'

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const debouncedHandleSearch = debounce(handleSearch, 500)

  return (
    <div className="grid flex-1 grid-cols-4 gap-10">
      <div className="col-span-4 lg:col-span-1">
        <SearchFilters />
      </div>
      <div className="col-span-4 flex flex-col gap-4 px-[5%] pb-10 lg:col-span-3 lg:pr-10">
        <h1 className="text-2xl font-bold">Search</h1>
        <Input onChange={debouncedHandleSearch} placeholder="search by name" />

        <SearchProducts searchQuery={searchQuery} />
      </div>
    </div>
  )
}
