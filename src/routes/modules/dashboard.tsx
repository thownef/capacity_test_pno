import { lazyLoadModuleRoute, lazyLoadRoute } from '@/routes/LazyLoadRoutes'
import TitlePage from '@/shared/components/TitlePage/TitlePage'
import { ModuleName, PageName, PagePath } from '@/shared/core/enum/page.enum'

export const dashboardRoute = [
  {
    path: PagePath.DASHBOARD,
    element: lazyLoadRoute('Base'),
    children: [
      {
        path: '',
        element: (
          <TitlePage title='Dashboard'>{lazyLoadModuleRoute(ModuleName.DASHBOARD, PageName.DASHBOARD)}</TitlePage>
        )
      }
    ]
  }
]
