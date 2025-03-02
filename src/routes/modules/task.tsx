import { lazyLoadModuleRoute, lazyLoadRoute } from '@/routes/LazyLoadRoutes'
import TitlePage from '@/shared/components/TitlePage/TitlePage'
import { ModuleName, PageName, PagePath } from '@/shared/core/enum/page.enum'

export const taskRoute = [
  {
    path: PagePath.TASK,
    element: lazyLoadRoute('Base'),
    children: [
      {
        path: '',
        element: <TitlePage title='Task List'>{lazyLoadModuleRoute(ModuleName.TASK, PageName.TASK)}</TitlePage>
      },
      {
        path: PagePath.NEW_TASK,
        element: <TitlePage title='New Task'>{lazyLoadModuleRoute(ModuleName.TASK, PageName.TASK_FORM)}</TitlePage>
      },
      {
        path: PagePath.EDIT_TASK,
        element: <TitlePage title='Edit Task'>{lazyLoadModuleRoute(ModuleName.TASK, PageName.TASK_FORM)}</TitlePage>
      }
    ]
  }
]
