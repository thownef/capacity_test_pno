import { useCallback, useState } from 'react'
import { columnTaskOptions } from '@/modules/task/core/config/select-options'

type FilterTaskListProps = {
  onFilterTaskList: (category: string | number) => void
  onSearch: (term: string) => void
}

const FilterTaskList = ({ onFilterTaskList, onSearch }: FilterTaskListProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | number>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleCategorySelect = useCallback((category: string | number) => {
    onFilterTaskList(category)
    setSelectedCategory(category)
    setIsDropdownOpen(false)
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSearch(searchTerm)
    },
    [searchTerm]
  )

  return (
    <div className='w-full md:w-2/3 lg:w-1/2'>
      <form onSubmit={handleSubmit} className='w-full'>
        <div className='flex flex-col sm:flex-row'>
          <label htmlFor='search-dropdown' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Search
          </label>

          <div className='relative w-full sm:w-auto mb-2 sm:mb-0'>
            <button
              id='dropdown-button'
              type='button'
              onClick={toggleDropdown}
              className='w-full sm:w-[150px] z-10 inline-flex items-center justify-between py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg sm:rounded-s-lg sm:rounded-e-none hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 '
            >
              <span className='truncate mr-1'>{selectedCategory}</span>
              <svg
                className='w-2.5 h-2.5 flex-shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 4 4 4-4'
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                id='dropdown'
                className='absolute top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full sm:w-[200px] mt-1'
              >
                <ul className='py-2 text-sm text-gray-700' aria-labelledby='dropdown-button'>
                  {columnTaskOptions.map(({ value, label }) => (
                    <li key={value}>
                      <button
                        type='button'
                        onClick={() => handleCategorySelect(value)}
                        className='inline-flex w-full px-4 py-2 hover:bg-gray-100 truncate'
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className='relative w-full'>
            <input
              onChange={handleChange}
              type='search'
              id='search-dropdown'
              className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg sm:rounded-s-none sm:rounded-e-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none'
              placeholder='Search...'
            />
            <button
              type='submit'
              className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FilterTaskList
