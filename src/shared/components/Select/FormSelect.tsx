import { OptionSelect } from '@/shared/core/types'
import { Controller } from 'react-hook-form'

type FormSelectProps = {
  control: any
  name: string
  label?: string
  options: OptionSelect[]
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
  error?: string
  className?: string
}

const FormSelect = (props: FormSelectProps) => {
  const {
    control,
    name,
    label = '',
    options = [],
    placeholder = 'Select an option',
    isRequired = false,
    isDisabled = false,
    className = ''
  } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={`mb-4 ${className}`}>
            {label && (
              <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
                {label}
                {isRequired && <span className='text-red-500 ml-1'>*</span>}
              </label>
            )}
            <select
              id={name}
              {...field}
              disabled={isDisabled}
              className={`bg-gray-50 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } text-gray-900 text-sm rounded-lg border-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
            >
              <option value='' disabled>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && <p className='mt-1 text-sm text-red-500'>{error.message}</p>}
          </div>
        )
      }}
    />
  )
}

export default FormSelect
