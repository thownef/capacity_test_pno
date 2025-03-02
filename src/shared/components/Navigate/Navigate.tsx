import { Navigate, useLocation } from 'react-router'

import { PagePath } from '@/shared/core/enum'

const NavigateComponent = () => {
  const location = useLocation()

  return <Navigate state={{ from: location }} to={PagePath.TASK} />
}

export default NavigateComponent
