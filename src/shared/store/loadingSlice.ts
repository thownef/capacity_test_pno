import { StateCreator } from 'zustand'

export interface ILoadingSlice {
  isLoading: boolean
  setStatusLoading: (status: boolean) => void
}

export const createLoadingSlice: StateCreator<ILoadingSlice, [], [], ILoadingSlice> = (set) => ({
  isLoading: false,
  setStatusLoading: (isLoading) => set(() => ({ isLoading }))
})
