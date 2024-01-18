import { account, ID } from '@/modules/core/db'

import { TSignup } from '../entities'

export const signup = async (data: TSignup) => {
  await account.create(ID.unique(), data.email, data.password, data.name)
}
