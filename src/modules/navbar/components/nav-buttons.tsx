import { Button } from '@/shared/components/ui/button'
import { UserButton } from '@/modules/user'
import { CartSheet } from '@/modules/cart'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

export const NavButtons = () => {
  return (
    <div className="flex flex-1 items-center justify-end gap-2">
      <Button className="h-fit rounded-full p-2" variant={'ghost'} asChild>
        <Link to="/search">
          <Search size={20} />
        </Link>
      </Button>

      <UserButton />

      <CartSheet />
    </div>
  )
}
