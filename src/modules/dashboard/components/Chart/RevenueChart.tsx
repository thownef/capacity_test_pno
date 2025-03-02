import { memo, useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'

const RevenueChart = memo(() => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<ApexCharts | null>(null)

  useEffect(() => {
    const options = {
      series: [
        {
          name: 'Revenue',
          data: [120, 145, 170, 190, 220]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40px',
          borderRadius: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['2020', '2021', '2022', '2023', '2024']
      },
      yaxis: {
        title: {
          text: 'Doanh thu (triệu đồng)'
        }
      },
      fill: {
        opacity: 1,
        colors: ['#4F46E5']
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + ' triệu đồng'
          }
        }
      },
      title: {
        text: 'Doanh thu Công ty A',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold'
        }
      }
    }

    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      chartInstance.current = new ApexCharts(chartRef.current, options)
      chartInstance.current.render()
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <div ref={chartRef} className='revenue-chart' />
})

RevenueChart.displayName = 'RevenueChart'

export default RevenueChart
