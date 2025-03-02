import { useLocation, useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { priorityTaskOptions, statusTaskOptions, typeTaskOptions } from '@/modules/task/core/config/select-options'
import { FormInput } from '@/shared/components/Input'
import FormSelect from '@/shared/components/Select/FormSelect'
import FormTextarea from '@/shared/components/Textarea/FormTextarea'
import useHandleForm from '@/shared/hooks/useHandleForm'
import { PagePath } from '@/shared/core/enum'
import { useBoundStore } from '@/shared/store'
import { TaskForm } from '@/modules/task/core/types/task-form.type'
import { FormTask, initForm, TaskFormSchema } from '@/modules/task/core/config/form/task-form'

const TaskFormPage = () => {
  const { taskId } = useParams()
  const { state } = useLocation()
  const { taskList, setTaskList } = useBoundStore()
  const { handleSubmit, control } = useForm<FormTask>({
    values: !taskId ? initForm : state,
    resolver: yupResolver(TaskFormSchema),
    mode: 'all'
  })

  const onSubmit = (values: TaskForm) => {
    const { status, ...newTask } = values
    const newTaskList = { ...taskList }
    if (!taskId) {
      newTaskList[status] = [...newTaskList[status], { ...newTask, id: `task-${Date.now()}` }]
    } else {
      const index = newTaskList[status].findIndex((task) => task.id === taskId)
      newTaskList[status][index] = { ...newTask, id: taskId }
    }
    setTaskList(newTaskList)
  }

  const { onSubmitForm } = useHandleForm({
    onSubmit,
    id: taskId,
    isValidForm: true,
    pathNavigate: PagePath.TASK
  })

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit(onSubmitForm)} className='max-w-md'>
        <FormInput label='Title' name='title' control={control} isRequired />
        <FormTextarea label='Description' name='description' control={control} isRequired />
        <div className='flex mt-4 gap-4'>
          <FormSelect name='status' control={control} options={statusTaskOptions} />
          <FormSelect name='priority' control={control} options={priorityTaskOptions} />
          <FormSelect name='type' control={control} options={typeTaskOptions} />
        </div>
        <button
          type='submit'
          className='text-white mt-4 float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default TaskFormPage
