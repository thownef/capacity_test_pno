import { useCallback } from 'react'
import { useBoundStore } from '@/shared/store'

const useFetchData = () => {
  const { taskList, setTaskList } = useBoundStore()

  const handleMoveTask = useCallback(
    (sourceColumnId: string, targetColumnId: string, sourceIndex: number, targetIndex: number) => {
      const newTaskList = { ...taskList }
      const sourceTask = newTaskList[sourceColumnId][sourceIndex]

      newTaskList[sourceColumnId] = newTaskList[sourceColumnId].filter((_, idx) => idx !== sourceIndex)

      newTaskList[targetColumnId] = [
        ...newTaskList[targetColumnId].slice(0, targetIndex),
        sourceTask,
        ...newTaskList[targetColumnId].slice(targetIndex)
      ]

      setTaskList(newTaskList)
    },
    [taskList]
  )

  return {
    taskList,
    onMoveTask: handleMoveTask,
  }
}

export default useFetchData
