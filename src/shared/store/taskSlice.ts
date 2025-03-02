import { StateCreator } from 'zustand'
import { initData } from '@/assets/mocks/data'
import { ColumnData } from '@/modules/task/core/types/column.type'

export interface ITaskSlice {
  taskList: ColumnData
  setTaskList: (newTaskList: ColumnData) => void
  deleteTask: (taskId: string) => void
}

export const createTaskSlice: StateCreator<ITaskSlice, [], [], ITaskSlice> = (set, get) => ({
  taskList: initData,
  setTaskList: (newTaskList) => set({ taskList: { ...newTaskList } }),
  deleteTask: (taskId) => {
    const currentTaskList = get().taskList
    const newTaskList = { ...currentTaskList }

    Object.keys(newTaskList).forEach((columnId) => {
      newTaskList[columnId] = newTaskList[columnId].filter((task) => task.id !== taskId)
    })

    set({ taskList: newTaskList })
  }
})
