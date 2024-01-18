import { account } from '@/modules/core/db'

import { TSignin } from '../entities'

export const signin = async (data: TSignin) => {
  await account.createEmailSession(data.email, data.password)
}
