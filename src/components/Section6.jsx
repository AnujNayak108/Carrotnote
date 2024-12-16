import { useState } from 'react'
import { LuNotepadText } from "react-icons/lu";

function Section6() {
  return (
    <>
    <div className='flex flex-col justify-center items-center px-12 w-screen mb-20 bg-[#f6fcff] border-t-[#d1ebfb] border-b-[#d1ebfb] border-2'>
        <div className='flex flex-col justify-center items-center text-center mt-20 gap-4 mb-20'>
           <h1 className='text-[#272e5d] text-[1.77em] font-normal font-serif'>What can you sell on Stuvia?</h1> 
           <p className='px-40'>All of your written study documents can be sold on Stuvia, including:!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-40 p-6 mb-20">
      {/* Card 1 */}
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center shadow-md bg-white p-2 rounded-md">
        <LuNotepadText className='h-8 w-8'/>
        </div>
       <h1>Summaries</h1>
      </div>
    </div>
    <div></div>
    </div>
    </>
  )
}

export default Section6
