import { useState } from 'react'
import { LuNotepadText } from "react-icons/lu";

function Section7() {
  return (
    <>
    <div className='flex flex-col justify-center items-center px-12 w-screen mb-20'>
        <div className='flex flex-col justify-center items-center text-center mt-20 gap-4 mb-20'>
           <h1 className='text-[#272e5d] text-[1.77em] font-normal font-serif'>How does it work?</h1> 
           <p className='px-40'>Did you write summaries of your textbooks while preparing for an exam? Or did you write notes each class? You can now earn money with your knowledge. Well-written summaries receive great reviews. Resulting in more sales and higher earnings.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40 p-6 mb-20">
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
    </div>
    <div></div>
    </div>
    </>
  )
}

export default Section7
