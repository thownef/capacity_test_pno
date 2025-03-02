import { create } from 'zustand'
import { ILoadingSlice } from '@/shared/store/loadingSlice'
import { createLoadingSlice } from '@/shared/store/loadingSlice'
import { ITaskSlice } from '@/shared/store/taskSlice'
import { createTaskSlice } from '@/shared/store/taskSlice'

export type CommonState = ILoadingSlice & ITaskSlice

export const useBoundStore = create<CommonState>((...a) => ({
  ...createTaskSlice(...a),
  ...createLoadingSlice(...a)
}))
