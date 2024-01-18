import { Link } from 'react-router-dom'
import { useState } from 'react'

import { TProduct } from '../entities'

interface Props {
  product: TProduct
}

export const FavouriteProductCard = ({ product }: Props) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className="flex h-96 w-80 flex-col whitespace-nowrap text-wrap ring-2 ring-black">
      <Link to={`/product/${product.id}`}>
        <>
          <div
            onMouseLeave={() => setShowDescription(false)}
            onMouseEnter={() => setShowDescription(true)}
            className="relative box-border h-80 w-80"
          >
            {showDescription && (
              <div className="absolute bottom-0 left-0 right-0 max-h-full overflow-y-auto bg-gray-900 bg-opacity-80 p-4 lowercase text-white">
                {product.description}
              </div>
            )}
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
