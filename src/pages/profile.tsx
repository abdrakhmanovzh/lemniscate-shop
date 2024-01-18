import { Button } from '@/shared/components/ui/button'
import { useAuthStore } from '@/modules/auth'

export const ProfilePage = () => {
  const user = useAuthStore((state) => state.user)
  const signout = useAuthStore((state) => state.signout)

  return (
    <div className="flex flex-1 gap-40 px-[5%]">
      <div className="flex w-fit flex-col gap-4">
        <h1 className="text-3xl font-semibold">my pofile</h1>
        <hr />
        <p className="text-lg lowercase text-neutral-600">name: {user?.name}</p>
        <p className="text-lg lowercase text-neutral-600">email: {user?.email}</p>

        <Button variant={'outline'} onClick={signout}>
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
