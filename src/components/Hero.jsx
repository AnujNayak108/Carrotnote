import { useState } from 'react'

function Hero() {
  return (
    <>
      <div className='flex justify-center items-center gap-4 px-12'>
        <div className=' flex justify-center items-center w-[55%] h-screen'>
            <div className='px-0 max-w-[90%]'>
                <h1 className='text-[#272e5d] text-[3em] font-medium pb-12 font-serif'>Sell your revision notes in a split second</h1>
            </div>
        </div>
        <div className=' w-[45%] h-screen flex flex-col justify-center items-start gap-4'>
            <div className='max-w-[75%]'>
                <p className='text-[#5b6080] text-[1em] font-normal leading-8'>Your revision notes, summaries, flashcards, study guides and other study resources are worth money. Stuvia is an online learning platform where you can sell and share your revision notes to your fellow students. We offer a generous commission on every sale.</p>
            </div>
            <div>
                <button className='bg-[#22c5b6] py-3 px-6 rounded-[30px] text-[1em] font-medium text-white'>Start Selling</button>
            </div>
        </div>
      </div>
      <div className='px-12 pb-12 pt-[-10px] mb-12'>
        <img src="https://www.stuvia.com/hosted-imgs/app/sell-study-notes/full_sell_header_phone.jpg" alt="" />
      </div>
    </>
  )
}

export default Hero
