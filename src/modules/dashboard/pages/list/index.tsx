import EmployeeGrowthChart from '@/modules/dashboard/components/Chart/EmployeeGrowthChart'
import RevenueChart from '@/modules/dashboard/components/Chart/RevenueChart'

const DashboardPage = () => {
  return (
    <div className='dashboard-container p-6'>
      <div className='bg-white rounded-lg shadow-md p-4 mb-6'>
        <RevenueChart />
      </div>
      <div className='bg-white rounded-lg shadow-md p-4 mb-6'>
        <EmployeeGrowthChart />
      </div>
    </div>
  )
}

export default DashboardPage
