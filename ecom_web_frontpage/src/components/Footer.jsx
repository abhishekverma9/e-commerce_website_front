import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-gray-900'>
        <div className='flex md:justify-evenly text-white p-4 py-2'>
            <div>
                <h1 className='text-xl text-gray-500'>About</h1>
                <div className='flex flex-col'>
                <a className='hover:underline hover:text-blue-500' href="/about">About us</a>
                <a className='hover:underline hover:text-blue-500' href="/careers">Careers</a>
                <a className='hover:underline hover:text-blue-500' href="/carporate">Carporate Info</a>
                </div>
            </div>
            <div>
                <h1 className='text-xl text-gray-500'>Help</h1>
                <div className='flex flex-col'>
                <a className='hover:underline hover:text-blue-500' href="">Payments</a>
                <a className='hover:underline hover:text-blue-500' href="">Shipping</a>
                <a className='hover:underline hover:text-blue-500' href="">FAQ</a>
                </div>
            </div>
            <div>
                <h1 className='text-xl text-gray-500'>Contact</h1>
                <div className='flex flex-col'>
                <a className='hover:underline hover:text-blue-500' href=""><img src="https://i.pinimg.com/564x/e0/ce/21/e0ce216ce3b4681f7c18767a70a1e186.jpg" alt="Instagram" width={24}/></a>
                <a className='hover:underline hover:text-blue-500' href=""><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" width={24}/></a>
                <a className='hover:underline hover:text-blue-500' href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" alt="" width={24}/></a>
                </div>
            </div>
            <div>
                <h1 className='text-xl text-gray-500'>Consumer Policy</h1>
                <div className='flex flex-col'>
                    <span className='hover:underline hover:text-blue-500'>Cancellation and returns</span>
                    <span className='hover:underline hover:text-blue-500'>Terms of use</span>
                    <span className='hover:underline hover:text-blue-500'>Privacy</span>
                </div>
            </div>
        </div>
        <div className='text-gray-500 text-center p-4 hover:underline'>
            Copyright &copy; www.ecommerce.com || All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer
