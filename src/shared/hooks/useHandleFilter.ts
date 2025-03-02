import { useBoundStore } from '@/shared/store'
import { ColumnData } from '@/modules/task/core/types/column.type'
import { useCallback, useState } from 'react'
const useHandleFilter = () => {
  const { taskList } = useBoundStore()
  const [data, setData] = useState<ColumnData>(taskList)

  const handleFilterTaskList = useCallback(
    (category: string) => {
      const newTaskList = { ...taskList }
      if (category === 'All') {
        setData(taskList)
      } else {
        const filteredTaskList = Object.keys(taskList).reduce(
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
        setData(filteredTaskList)
      }
    },
    [taskList]
  )

  return {
    data,
    handleFilterTaskList
  }
}

export default useHandleFilter
