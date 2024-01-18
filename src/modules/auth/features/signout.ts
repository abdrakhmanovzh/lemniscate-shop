import { account } from '@/modules/core/db'

export const signout = async () => {
  await account.deleteSession('current')
}
