import { ColumnData } from '@/modules/task/core/types/column.type'

export const initData: ColumnData = {
  todo: [
    {
      id: 'task-1',
      title: 'Tạo UI cho trang chủ',
      description: 'Tạo UI cho trang chủ',
      priority: 'high',
      type: 'task'
    },
    { id: 'task-2', title: 'Thiết kế database', description: 'Thiết kế database', priority: 'medium', type: 'story' }
  ],
  inProgress: [{ id: 'task-3', title: 'Phát triển API', description: 'Phát triển API', priority: 'high', type: 'bug' }],
  done: [{ id: 'task-4', title: 'Setup môi trường', description: 'Setup môi trường', priority: 'medium', type: 'task' }]
}
