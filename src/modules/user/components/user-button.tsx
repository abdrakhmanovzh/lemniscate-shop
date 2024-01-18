import { Button } from '@/shared/components/ui/button'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '@/modules/auth'
import { User } from 'lucide-react'

export const UserButton = () => {
  const navigate = useNavigate()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const handleUser = () => {
    if (!isAuthenticated) {
      navigate('/signin')
    }
  }

  return (
    <Button className="h-fit rounded-full p-2" onClick={handleUser} variant={'ghost'} asChild>
      <Link to="/profile">
        <User size={20} />
      </Link>
    </Button>
  )
}
