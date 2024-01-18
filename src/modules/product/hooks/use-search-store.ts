import { create } from 'zustand'

import { Category } from '../entities'

interface SearchStore {
  setCategory: (category: Category | null) => void
  category: Category | null
}

export const useSearchStore = create<SearchStore>((set) => ({
  setCategory: (category) => set({ category }),
  category: null
}))
