import { useAllProducts, ProductCard, TProduct } from '@/modules/product'
import { useEffect, useState } from 'react'

interface Props {
  searchQuery: string
}

export const SearchProducts = ({ searchQuery }: Props) => {
  const { data: products } = useAllProducts()
  const [filtered, setFiltered] = useState<TProduct[] | undefined>(products?.documents)

  useEffect(() => {
    const filteredProducts = products?.documents?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFiltered(filteredProducts)
  }, [products?.documents, searchQuery])

  return (
    <div className="grid w-full grid-cols-3 gap-10">
      {filtered?.map((product) => (
        <div className="grid" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
