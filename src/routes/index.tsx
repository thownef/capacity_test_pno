import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router'
import { lazyLoadRoute } from '@/routes/LazyLoadRoutes'
import Layout from '@/shared/layouts'
import { dashboardRoute, taskRoute } from '@/routes/modules'

const NavigateComponent = lazy(() => import('@/shared/components/Navigate/Navigate'))

const configRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback='loading...'>
            <NavigateComponent />
          </Suspense>
        )
      },
      ...taskRoute,
      ...dashboardRoute
    ]
  },
  {
    path: '*',
    element: lazyLoadRoute('NotFound')
  }
]
const router = createBrowserRouter(configRoutes)

const RoutesApp = () => {
  return <RouterProvider router={router} />
}

export default RoutesApp
