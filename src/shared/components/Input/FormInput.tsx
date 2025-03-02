import { Controller } from 'react-hook-form'

type FormInputProps = {
  control: any
  name: string
  label: string
  isRequired?: boolean
  isDisabled?: boolean
}

const FormInput = (props: FormInputProps) => {
  const { control, name, label = '', isRequired = false, isDisabled = false } = props

  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className=''>
            {label && (
              <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
                {label} {isRequired && <span className='text-red-500'>*</span>}
              </label>
            )}
            <input
              {...field}
              id={name}
              disabled={isDisabled}
              className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full p-2.5'
            />
            {error && <p className='mt-1 text-sm text-red-600'>{error.message}</p>}
          </div>
        )
      }}
    />
  )
}

export default FormInput
