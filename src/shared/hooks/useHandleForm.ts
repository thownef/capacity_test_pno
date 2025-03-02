import { useNavigate } from 'react-router'

type HooksHandleForm = {
  id?: number | string
  onSubmit: any
  isValidForm: boolean
  pathNavigate?: string
  fnAfterSubmit?: () => void
}

const useHandleForm = ({ id, onSubmit, isValidForm, pathNavigate, fnAfterSubmit }: HooksHandleForm) => {
  const navigate = useNavigate()

  const onSubmitForm = async (value: any) => {
    if (isValidForm) {
      await onSubmit(value, id)
      fnAfterSubmit?.()
      if (pathNavigate) {
        navigate(pathNavigate, { replace: true })
      }
    }
  }

  return {
    onSubmitForm
  }
}

export default useHandleForm
