import { account } from '@/modules/core/db'
import { TUser } from '@/modules/user'

export const getSession = async () => {
  const user = await account.get<TUser>()
  return user
}
