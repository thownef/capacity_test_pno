import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Column from '@/modules/task/components/Column/Column'
import { columnColors, columnTitles } from '@/modules/task/core/config/columns/menu'
import useFetchData from '@/modules/task/hooks/useFetchData'
import { PagePath } from '@/shared/core/enum'

const TaskListPage: React.FC = () => {
  const navigate = useNavigate()
  const { taskList, onMoveTask } = useFetchData()

  const handleNewTask = useCallback(() => {
    navigate(`${PagePath.TASK}/new`)
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='p-6 bg-gray-50 h-screen'>
        <div className='flex justify-start mb-4'>
          <button
            onClick={handleNewTask}
            className='cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center'
          >
            <span className='mr-2 '>+</span> Add Task
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {Object.keys(taskList).map((columnId) => (
            <Column
              key={columnId}
              columnId={columnId}
              title={columnTitles[columnId]}
              tasks={taskList[columnId]}
              onMoveTask={onMoveTask}
              color={columnColors[columnId]}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  )
}

export default TaskListPage
