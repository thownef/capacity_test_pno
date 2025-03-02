import { EnumTypeName } from '@/shared/core/types/common.type'
export enum StatusTask {
  TODO = 'todo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done'
}
export const StatusTaskEnumUsingName: EnumTypeName = {
  TODO: 'Todo',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done'
}
