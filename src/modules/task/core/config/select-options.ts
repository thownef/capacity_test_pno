import { PriorityTask } from '@/modules/task/core/enum/priority.enum'
import { PriorityTaskEnumUsingName } from '@/modules/task/core/enum/priority.enum'
import { StatusTask, StatusTaskEnumUsingName } from '@/modules/task/core/enum/status.enum'
import { TypeTask, TypeTaskEnumUsingName } from '@/modules/task/core/enum/type.enum'
import { OptionSelect } from '@/shared/core/types'

export const statusTaskOptions: OptionSelect[] = [
  {
    value: StatusTask.TODO,
    label: StatusTaskEnumUsingName.TODO
  },
  {
    value: StatusTask.IN_PROGRESS,
    label: StatusTaskEnumUsingName.IN_PROGRESS
  },
  {
    value: StatusTask.DONE,
    label: StatusTaskEnumUsingName.DONE
  }
]

export const priorityTaskOptions: OptionSelect[] = [
  {
    value: PriorityTask.LOW,
    label: PriorityTaskEnumUsingName.LOW
  },
  {
    value: PriorityTask.MEDIUM,
    label: PriorityTaskEnumUsingName.MEDIUM
  },
  {
    value: PriorityTask.HIGH,
    label: PriorityTaskEnumUsingName.HIGH
  }
]

export const typeTaskOptions: OptionSelect[] = [
  {
    value: TypeTask.TASK,
    label: TypeTaskEnumUsingName.TASK
  },
  {
    value: TypeTask.BUG,
    label: TypeTaskEnumUsingName.BUG
  },
  {
    value: TypeTask.STORY,
    label: TypeTaskEnumUsingName.STORY
  }
]

export const columnTaskOptions: OptionSelect[] = [
  {
    value: 'All',
    label: 'All'
  },
  ...statusTaskOptions
]
