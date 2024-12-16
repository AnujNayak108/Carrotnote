import { useState } from 'react'

function Section1() {
  return (
    <>
    <div className='flex flex-col justify-center items-center px-12 w-screen'>
        <div className='flex justify-center items-center'>
           <h1 className='text-[#272e5d] text-[1.77em] font-normal font-serif'>Sell your revision notes online in a quick and easy way</h1> 
        </div>
        <div className='flex flex-row justify-center items-center gap-8 pt-12 h-1/2'>
            <div className='bg-[#ffe8b7] h-1/2 w-1/3 flex flex-col justify-center items-center rounded-md p-10'>
            <div>
              <img src="https://www.stuvia.com/hosted-imgs/app/sell-study-notes/brain_money.png" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center pt-10'>
              <h1 className='text-[#272e5d] text-[1.11em] font-medium mb-3'>Your knowledge is worth money</h1>
              <p className='p-4'>Did you write textbook summaries on notes? These documents are worth money!</p>
            </div>
            </div>
            <div className='bg-[#c7ebff] h-1/2 w-1/3 flex flex-col justify-center items-center rounded-md p-10'>
            <div className='h-[165px] w-[216px]'>
              <img src="https://www.stuvia.com/hosted-imgs/app/sell-study-notes/file_upload.png" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center pt-10'>
              <h1 className='text-[#272e5d] text-[1.11em] font-medium mb-3'>Your knowledge is worth money</h1>
              <p className='p-4'>Did you write textbook summaries on notes? These documents are worth money!</p>
            </div>
            </div>
            <div className='bg-[#c3f8fc] h-1/2 w-1/3 flex flex-col justify-center items-center rounded-md p-10'>
            <div>
              <img src="https://www.stuvia.com/hosted-imgs/app/sell-study-notes/safe_money.png" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center pt-10'>
              <h1 className='text-[#272e5d] text-[1.11em] font-medium mb-3'>Your knowledge is worth money</h1>
              <p className='p-4'>Did you write textbook summaries on notes? These documents are worth money!</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section1
