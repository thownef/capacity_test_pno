import { memo, useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'
import { employeeData } from '@/modules/dashboard/core/config/columns/employee'

const EmployeeGrowthChart = memo(() => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<ApexCharts | null>(null)

  useEffect(() => {
    const significantPoints = employeeData
      .map((item, index, array) => {
        if (index > 0 && item.count > array[index - 1].count + 15) {
          return {
            x: item.month,
            y: item.count,
            marker: {
              size: 6,
              fillColor: '#ff4560',
              strokeColor: '#fff',
              radius: 2
            }
          }
        }
        return null
      })
      .filter((item) => item !== null)

    const options = {
      series: [
        {
          name: 'Số lượng nhân viên',
          data: employeeData.map((item) => item.count)
        }
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: 'Tăng trưởng nhân viên Công ty A',
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold'
        }
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: employeeData.map((item) => item.month),
        labels: {
          formatter: function (value: string) {
            const index = employeeData.findIndex((item) => item.month === value)
            return index % 3 === 0 || index === employeeData.length - 1 ? value : ''
          },
          rotate: 0,
          style: {
            fontSize: '12px'
          }
        },
        tickPlacement: 'none',
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        title: {
          text: 'Số lượng nhân viên'
        },
        min: Math.min(...employeeData.map((item) => item.count)) * 0.9,
        labels: {
          formatter: function (val: number) {
            return val.toFixed(0)
          }
        }
      },
      tooltip: {
        enabled: true,
        shared: false,
        intersect: false,
        x: {
          show: true,
          formatter: function (_val: number, opts?: any) {
            return employeeData[opts.dataPointIndex].month
          }
        },
        y: {
          formatter: function (val: number) {
            return val + ' nhân viên'
          }
        },
        marker: {
          show: true
        }
      },
      colors: ['#2E93fA'],
      markers: {
        size: 0,
        hover: {
          size: 5,
          sizeOffset: 3
        }
      },
      annotations: {
        points: significantPoints
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

  return (
    <div className='employee-growth-chart'>
      <div ref={chartRef} />
    </div>
  )
})

EmployeeGrowthChart.displayName = 'EmployeeGrowthChart'

export default EmployeeGrowthChart
