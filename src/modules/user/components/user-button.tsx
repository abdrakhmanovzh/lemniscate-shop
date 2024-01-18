import { Button } from '@/shared/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/modules/auth'
import { User } from 'lucide-react'

export const UserButton = () => {
  const navigate = useNavigate()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const handleUser = () => {
    if (!isAuthenticated) {
      navigate('/signin')
    } else {
      navigate('/profile')
    }
  }

  return (
    <Button className="h-fit rounded-full p-2" onClick={handleUser} variant={'ghost'}>
      <User size={20} />
    </Button>
  )
}
