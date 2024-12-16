import { useState } from 'react'

function Section3() {
  return (
    <>
    <div className='flex flex-col justify-center items-center px-12 w-screen mb-20'>
        <div className='flex flex-col justify-center items-center text-center gap-4 mb-20'>
           <h1 className='text-[#272e5d] text-[1.77em] font-normal font-serif'>How much does a seller earn at Stuvia?</h1> 
           <p className='px-40'>By selling documents on Stuvia, you're starting to create a passive income for yourself. Besides, you've already done the work, so count your profits!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Card 1 */}
      <div className="bg-yellow-100 p-6 rounded-md shadow-md">
        <div className="bg-yellow-300 w-max px-4 py-2 rounded-md mb-4 text-3xl font-bold text-gray-800">
          £62
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Average earnings per month
        </h3>
        <p className="text-gray-600">
          A seller on Stuvia can earn a few tens per month to a few hundred
          pounds per month.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-teal-200 p-6 rounded-md shadow-md">
        <div className="bg-teal-400 w-max px-4 py-2 rounded-md mb-4 text-3xl font-bold text-gray-800">
          £4
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Average earnings per sale
        </h3>
        <p className="text-gray-600">
          Every study document you have created can be sold indefinitely. Count
          your profits!
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-indigo-600 p-6 rounded-md shadow-md text-white">
        <div className="bg-purple-500 w-max px-4 py-2 rounded-md mb-4 text-3xl font-bold">
          3
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Average number of days until your first sale
        </h3>
        <p>
          Once your document has been uploaded, Stuvia’s marketing machine will
          start working for you right away.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-blue-100 p-6 rounded-md shadow-md">
        <div className="bg-blue-200 w-max px-4 py-2 rounded-md mb-4 text-3xl font-bold text-gray-800">
          17
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Average documents sold per month
        </h3>
        <p className="text-gray-600">
          Your documents are sold from early in the morning until late at night.
          On weekdays and weekends.
        </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Section3
