import { StateCreator } from 'zustand'
import { initData } from '@/assets/mocks/data'
import { ColumnData } from '@/modules/task/core/types/column.type'

export interface ITaskSlice {
  taskList: ColumnData
  setTaskList: (newTaskList: ColumnData) => void
  deleteTask: (taskId: string) => void
  filterTaskList: (category: string) => void
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
  },
  filterTaskList: (category) => {
    const currentTaskList = get().taskList
    const newTaskList = { ...currentTaskList }

    if (category === 'All') {
      set({ taskList: newTaskList })
    } else {
      const filteredTaskList = Object.keys(newTaskList).reduce(
        (acc, key) => {
          if (key === category) {
            acc[key] = newTaskList[key]
          } else {
            acc[key] = []
          }
          return acc
        },
        {} as typeof newTaskList
      )

      set({ taskList: filteredTaskList })
    }
  }
})
