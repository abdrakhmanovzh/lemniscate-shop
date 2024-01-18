import { persist } from 'zustand/middleware'
import { TUser } from '@/modules/user'
import { create } from 'zustand'

import { getSession, signout, signin, signup } from '../features'
import { TSignin, TSignup } from '../entities'

interface AuthStore {
  signup: (data: TSignup) => Promise<void>
  signin: (data: TSignin) => Promise<void>
  signout: () => Promise<void>
  isAuthenticated: boolean
  user: TUser | null
  loading: boolean
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      signin: async (data) => {
        set({ loading: true })
        await signin(data)
        set({ user: await getSession(), isAuthenticated: true, loading: false })
      },
      signup: async (data) => {
        set({ loading: true })
        await signup(data)
        set({ loading: false })
      },
      signout: async () => {
        await signout()
        set({ isAuthenticated: false, user: null })
      },
      isAuthenticated: false,
      loading: false,
      user: null
    }),
    {
      name: 'auth-storage'
    }
  )
)
