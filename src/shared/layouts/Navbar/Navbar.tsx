import { PagePath } from '@/shared/core/enum'
import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className='bg-gradient-to-r from-white to-gray-50 border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-center h-16 items-center'>
          <div className='flex space-x-4'>
            <Link
              to={PagePath.TASK}
              className={`text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out
                ${pathname.includes(PagePath.TASK) ? ' !text-blue-600' : 'hover:bg-gray-50'}`}
            >
              Task Manager
            </Link>
            <Link
              to={PagePath.DASHBOARD}
              className={`text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out
                ${pathname.includes(PagePath.DASHBOARD) ? ' !text-blue-600' : 'hover:bg-gray-50'}`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
