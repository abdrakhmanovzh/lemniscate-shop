import { Button } from '@/shared/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/modules/auth'

export const ProfilePage = () => {
  const user = useAuthStore((state) => state.user)
  const signout = useAuthStore((state) => state.signout)

  const navigate = useNavigate()

  const handleSignout = async () => {
    await signout()
    navigate('/')
  }

  return (
    <div className="flex flex-1 gap-40 px-[5%]">
      <div className="flex w-fit flex-col gap-4">
        <h1 className="text-3xl font-semibold">my profile</h1>
        <hr />
        <p className="text-lg lowercase text-neutral-600">name: {user?.name}</p>
        <p className="text-lg lowercase text-neutral-600">email: {user?.email}</p>

        <Button onClick={handleSignout} variant={'outline'}>
          sign out
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-3xl font-semibold">my orders</h1>
        <hr />
        <p className="text-lg lowercase text-neutral-600">no orders yet</p>
      </div>
    </div>
  )
}
