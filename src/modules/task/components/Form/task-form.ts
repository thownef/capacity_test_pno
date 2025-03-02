import * as Yup from 'yup'
import { TaskForm } from '@/modules/task/core/types/task-form.type'
import { StatusTask } from '@/modules/task/core/enum/status.enum'
import { PriorityTask } from '@/modules/task/core/enum/priority.enum'
import { TypeTask } from '@/modules/task/core/enum/type.enum'

export const initForm: TaskForm = {
  title: '',
  description: '',
  status: StatusTask.TODO,
  priority: PriorityTask.LOW,
  type: TypeTask.TASK
}

export const TaskFormSchema = Yup.object().shape({
  title: Yup.string().required('This field is required'),
  description: Yup.string().required('This field is required'),
})

export type FormTask = Yup.InferType<typeof TaskFormSchema>
