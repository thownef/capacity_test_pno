import { useCallback, useState, useEffect } from 'react'
import { useBoundStore } from '@/shared/store'
import { ColumnData } from '@/modules/task/core/types/column.type'

const useFetchData = () => {
  const { taskList, setTaskList } = useBoundStore()
  const [filteredData, setFilteredData] = useState<ColumnData>(taskList)
  const [currentFilter, setCurrentFilter] = useState<string | number>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const handleFilterTaskList = useCallback(
    (category: string | number) => {
      setCurrentFilter(category)

      let result: ColumnData = {}

      if (category === 'All') {
        result = { ...taskList }
      } else {
        result = Object.keys(taskList).reduce((acc, key) => {
          if (key === category) {
            acc[key] = taskList[key]
          } else {
            acc[key] = []
          }
          return acc
        }, {} as ColumnData)
      }

      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase().trim()

        Object.keys(result).forEach((columnId) => {
          result[columnId] = result[columnId].filter(
            (task) => task.title.toLowerCase().includes(term) || task.title.toLowerCase().includes(term)
          )
        })
      }

      setFilteredData(result)
    },
    [taskList, searchTerm]
  )

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

  useEffect(() => {
    handleFilterTaskList(currentFilter)
  }, [taskList, currentFilter, searchTerm])

  return {
    taskList: filteredData,
    onMoveTask: handleMoveTask,
    onFilterTaskList: handleFilterTaskList,
    searchTerm,
    onSearch: handleSearch
  }
}

export default useFetchData
