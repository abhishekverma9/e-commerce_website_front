import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
// import {a} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='bg-gray-900 h-14'>
                <div className='flex justify-around items-center'>
                    <div className="logo "><img className='hover:invert-100' width={30} color='white' src="logo.png" alt="" /></div>
                    <div className="searchbar bg-white w-[50%] rounded-full my-2 hover:outline-black">
                        <div className='flex '>
                            <span className='m-2'><IoMdSearch size={25} /></span>
                            <input type="text" className='p-1 outline-none rounded-full w-full border-0 px-3 text-lg' placeholder='Search your favourite products' />
                        </div>
                    </div>
                    <div className="cart text-white hover:text-gray-300 cursor-pointer flex gap-2">
                        <span><TiShoppingCart size={30} /></span>
                        <span>Cart</span>
                    </div>
                    <div className="login">
                        <button className='border bg-blue-900 hover:bg-blue-800 cursor-pointer rounded-full p-1 px-4 text-white text-lg'>Login</button>
                    </div>
                </div>
            </nav>
            <nav className='bg-gray-950 h-16'>
                <ul className='flex text-white justify-evenly items-center md:overflow-hidden overflow-x-auto'>
                    <li className='flex font-bold gap-1 cursor-pointer'><span><IoReorderThree size={25}/></span><span>All</span></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/fashion">Fashion</a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/product">Products</a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/mobiles">Mobiles</a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/kitchen">Kitchen</a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/electronics">Electronics </a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/computers">Computers </a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/laptop">Laptop </a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/books">Books </a></li>
                    <li  className='p-5 hover:text-gray-300'> <a href="/toys">Toys </a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
