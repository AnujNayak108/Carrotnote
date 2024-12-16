import React from "react"
import { useState } from "react"
import {FaNotesMedical, FaTimes} from "react-icons/fa"
import { IoMenu } from "react-icons/io5";
import { FaAutoprefixer } from "react-icons/fa";

const NavBar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl lg:p-20">
            </ul>
    </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-3 lg:px-20 py-4 px-8 border-b border-slate-800 fixed top-0 left-0 w-screen bg-white">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold bg-black">
                        <FaTimes/>
                    </span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden ">
                    <div className="flex-10 uppercase">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                        <li>
                        <div>
                <button className='bg-[#22c5b6] py-3 px-6 rounded-[30px] text-[1em] font-medium text-white'>Sell</button>
            </div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transition " onClick={handleClick}>
                    {click ? <FaTimes className="h-8 w-8"/> : <IoMenu className="h-10 w-10"/> }
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
