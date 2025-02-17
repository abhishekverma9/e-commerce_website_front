import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import Mobile from './Mobile';
import Mens from './Mens';

const Main = () => {
    return (
        <div className='min-h-screen justify-center flex '>
            <div className='flex flex-col w-full'>
                {/* <div className='py-16 flex justify-center relative'>
                    {/* <img className='rounded-xl h-[90vh]' src="bgi5.jpg" width='80%' alt="" />
                    <span className='absolute top-30 font-bold text-4xl font-serif shadow-2xs'>Fashion Wear</span>
                    <div className='flex absolute top-60 w-[50%] items-center gap-8 overflow-x-auto '>
                        <img src="womens.webp" width='80%' className='' alt="" />
                        <img src="mens.webp" width='80%' className='' alt="" />
                        <img src="kids.webp" width='80%' className='' alt="" />
                    </div> */}
                    {/* <div className="flex md:gap-5 gap-2 justify-center z-20 absolute">
                        <div><div className=" border-[#D9DCE1]  border-2 sm:border-4 rounded-full z-10 mt-2 absolute cursor-pointer"></div></div> <div><div className=" border-[#D9DCE1]  border-2 sm:border-4 rounded-full z-10 mt-2 absolute cursor-pointer"></div></div> <div><div className=" border-black border-2 sm:border-4 rounded-full z-10 mt-2 absolute cursor-pointer"></div></div>
                        <div><div className=" border-[#D9DCE1]  border-2 sm:border-4 rounded-full z-10 mt-2 absolute cursor-pointer"></div></div> <div><div className=" border-[#D9DCE1]  border-2 sm:border-4 rounded-full z-10 mt-2 absolute cursor-pointer"></div></div>
                    </div> }
                </div> */}
                <div className='h-[1px] bg-white opacity-15 w-[100%]'></div>
                <div className='min-h-screen'>
                    <h1 className='p-4 my-4 text-white md:px-30 text-3xl font-serif'>Trending Products For You</h1>
                    
                <h1 className='font-bold font-serif px-10 md:px-30 text-white text-xl pb-2'>Mobiles</h1>
                <div className='md:px-30'><Mobile/></div>
                <h1 className='font-bold font-serif px-30 text-white text-xl pb-2 pt-10'>Men's Wear</h1>
                <div className='md:px-30 md:pb-30 pb-10'><Mens/></div>
                </div>
                <div className='h-[1px] bg-white opacity-15 w-[100%]'></div>
            </div>
        </div>
    )
}

export default Main
