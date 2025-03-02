import { useRef } from 'react'
import { useDrop } from 'react-dnd'
import Task from '@/modules/task/components/Task/Task'
import { DragItem, Task as TaskType } from '@/modules/task/core/types/column.type'

type ColumnProps = {
  columnId: string
  title: string
  tasks: TaskType[]
  onMoveTask: (sourceColumnId: string, targetColumnId: string, sourceIndex: number, targetIndex: number) => void
  color: string
}

const Column = ({ columnId, title, tasks, onMoveTask, color }: ColumnProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item: DragItem) => {
      if (tasks.length === 0) {
        onMoveTask(item.columnId, columnId, item.index, 0)
        return { columnId }
      }
      return { columnId }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  drop(ref)
  return (
    <div ref={ref} className={`h-[380px] bg-white rounded-lg shadow-md ${isOver ? 'bg-gray-50' : ''}`}>
      <div className={`p-3 ${color} rounded-t-lg`}>
        <h2 className='font-semibold text-gray-700 flex items-center justify-between'>
          {title}
          <span className='bg-white text-gray-700 text-sm py-1 px-2 rounded-full'>{tasks.length}</span>
        </h2>
      </div>

      <div className='p-2 h-[320px] overflow-y-auto'>
        {tasks.map((task, index) => (
          <Task key={task.id} task={task} index={index} columnId={columnId} onMoveTask={onMoveTask} />
        ))}
      </div>
    </div>
  )
}

export default Column
