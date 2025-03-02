import Navbar from '@/shared/layouts/Navbar/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='h-screen bg-[#faf9f7]'>
      <Navbar />
      <div className='max-w-6xl mx-auto px-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
