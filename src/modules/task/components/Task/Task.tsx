import { useRef, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useDrag, useDrop } from 'react-dnd'
import { DragItem, Task as TaskType } from '@/modules/task/core/types/column.type'
import { getPriorityColor, getTypeIcon } from '@/modules/task/utils'
import { PagePath } from '@/shared/core/enum'
import { useBoundStore } from '@/shared/store'

type TaskProps = {
  task: TaskType
  index: number
  columnId: string
  onMoveTask: (sourceColumnId: string, targetColumnId: string, sourceIndex: number, targetIndex: number) => void
}

const Task = ({ task, index, columnId, onMoveTask }: TaskProps) => {
  const { deleteTask } = useBoundStore()
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, index, columnId, type: 'TASK' } as DragItem,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    hover: (item: DragItem, monitor) => {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index
      const sourceColumnId = item.columnId
      const targetColumnId = columnId
      if (dragIndex === hoverIndex && sourceColumnId === targetColumnId) {
        return
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect()

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      if (!clientOffset) {
        return
      }
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      onMoveTask(sourceColumnId, targetColumnId, dragIndex, hoverIndex)

      item.index = hoverIndex
      item.columnId = targetColumnId
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  drag(drop(ref))

  const handleEditTask = useCallback(() => {
    navigate(`${PagePath.TASK}/${task.id}`, { state: { ...task, status: columnId } })
  }, [task.id])

  const handleDeleteTask = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      deleteTask(task.id)
    },
    [task.id]
  )

  return (
    <div
      onClick={handleEditTask}
      ref={ref}
      className={`cursor-pointer bg-white border border-gray-200 p-3 rounded-md mb-2 shadow-sm hover:shadow-md transition-shadow 
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${isOver ? 'border-blue-400 border-2' : 'border-gray-200 border'}`}
    >
      <div className='flex items-center justify-between mb-2'>
        <span className='text-sm text-gray-500'>{task.id}</span>
        <div className='flex items-center'>
          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>{task.priority}</span>

          <button
            onClick={handleDeleteTask}
            className='ml-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer'
            title='Delete task'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='flex items-center mb-2'>
        <span className='mr-2'>{getTypeIcon(task.type)}</span>
        <h3 className='font-medium text-gray-800'>{task.title}</h3>
      </div>
    </div>
  )
}

export default Task
