import { Controller } from 'react-hook-form'

type FormTextareaProps = {
  control: any
  name: string
  label: string
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
  rows?: number
  maxLength?: number
  className?: string
}

const FormTextarea = (props: FormTextareaProps) => {
  const {
    control,
    name,
    label = '',
    placeholder = '',
    isRequired = false,
    isDisabled = false,
    rows = 4,
    maxLength,
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
            <textarea
              id={name}
              {...field}
              rows={rows}
              maxLength={maxLength}
              placeholder={placeholder}
              disabled={isDisabled}
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2`}
            />
            {maxLength && field.value && (
              <div className='flex justify-end mt-1'>
                <span className='text-xs text-gray-500'>
                  {field.value.length}/{maxLength}
                </span>
              </div>
            )}
            {error && <p className='mt-1 text-sm text-red-500'>{error.message}</p>}
          </div>
        )
      }}
    />
  )
}

export default FormTextarea
