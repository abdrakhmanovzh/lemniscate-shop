import { Link } from 'react-router-dom'

import { TProduct } from '../entities'

interface Props {
  product: TProduct
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="mx-auto flex h-96 w-96 flex-col p-4 ring-2 ring-black lg:w-80">
      <Link to={`/product/${product.id}`}>
        <>
          <div className="relative box-border h-72 w-72">
            <img className="h-full w-full object-cover" src={product.image} alt={product.title} />
          </div>
          <div className="px-4 py-4">
            <h2 className="text-lg font-semibold lowercase">{product.title}</h2>
          </div>
        </>
      </Link>
    </div>
  )
}
