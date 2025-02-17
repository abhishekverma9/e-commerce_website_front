import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

const mobiles = [
    {
        "id": 1,
        "img": "mobile1.webp",
        "title": "OnePlus 12 Pro",
        "desc": "A flagship experience with Snapdragon 8 Gen 3 and Hasselblad cameras and more...",
        "rprice":"129999",
        "price": "75999",
        "rating": "4.5",
        "reviews": "9876"
    },
    {
        "id": 2,
        "img": "mobile2.png",
        "title": "iPhone 16 Pro",
        "desc": "Featuring a stunning 6.9-inch LTPO OLED display with ProMotion technology.",
        "rprice":"129999",
        "price": "115999",
        "rating": "4.8",
        "reviews": "18032"
    },
    {
        "id": 3,
        "img": "mobile1.webp",
        "title": "iPhone 16 Pro Max Ultra",
        "desc": "Powered by the A18 Pro chip, delivering groundbreaking speed and efficiency.",
        "rprice":"129999",
        "price": "118999",
        "rating": "4.7",
        "reviews": "16478"
    },
    {
        "id": 4,
        "img": "mobile4.png",
        "title": "iPhone 16 Pro Titanium",
        "desc": "Equipped with a 48MP triple-camera system for professional-grade photography.",
        "rprice":"129999",
        "price": "99999",
        "rating": "4.9",
        "reviews": "19567"
    },
    {
        "id": 5,
        "img": "mobile5.png",
        "title": "OnePlus 12 Pro",
        "desc": "Fast charging, smooth display, and powerful AI-driven photography.",
        "rprice":"129999",
        "price": "75999",
        "rating": "4.4",
        "reviews": "10234"
    },
    {
        "id": 6,
        "img": "mobile2.png",
        "title": "iPhone 16 Pro Max",
        "desc": "Built with a titanium frame for durability and a sleek, lightweight...",
        "rprice":"129999",
        "price": "117999",
        "rating": "4.8",
        "reviews": "17543"
    },
    {
        "id": 7,
        "img": "mobile5.png",
        "title": "iPhone 16 Ultra",
        "desc": "Featuring a next-gen LiDAR scanner for enhanced AR experiences.",
        "rprice":"129999",
        "price": "119999",
        "rating": "4.7",
        "reviews": "15934"
    },
    {
        "id": 8,
        "img": "mobile1.webp",
        "title": "OnePlus 12 Pro",
        "desc": "120Hz AMOLED display and ultra-fast charging for all-day power.",
        "rprice":"129999",
        "price": "75999",
        "rating": "4.5",
        "reviews": "9765"
    },
    {
        "id": 9,
        "img": "mobile2.png",
        "title": "iPhone 16 Pro",
        "desc": "Supports ProRAW and ProRes video recording for content creators.",
        "rprice":"129999",
        "price": "118599",
        "rating": "4.8",
        "reviews": "16278"
    },
    {
        "id": 10,
        "img": "mobile4.png",
        "title": "iPhone 16 Pro Max Power",
        "desc": "Boasts an all-day battery life with MagSafe fast wireless charging.",
        "rprice":"129999",
        "price": "121999",
        "rating": "4.9",
        "reviews": "19876"
    },
    {
        "id": 11,
        "img": "mobile2.png",
        "title": "iPhone 16 Pro",
        "desc": "Supports ProRAW and ProRes video recording for content creators.",
        "rprice":"129999",
        "price": "118599",
        "rating": "4.8",
        "reviews": "16278"
    },
    {
        "id": 12,
        "img": "mobile4.png",
        "title": "iPhone 16 Pro Max Power",
        "desc": "Boasts an all-day battery life with MagSafe fast wireless charging.",
        "rprice":"129999",
        "price": "121999",
        "rating": "4.9",
        "reviews": "19876"
    }
]

const Mobile = () => {
    return (
        <ul className='flex flex-wrap justify-center overflow-y-auto h-[60vh] md:h-[80vh]  bg-gray-500 md:py-2 rounded-xl '>
            {mobiles.map(item => {
                return (
                    //   
                    <div key={item.id} className='Cardcontainer p-3 md:gap-x-20 gap-y-10 items-center justify-center overflow-y-auto'>
                        <div className='card border rounded-lg bg-white hover:bg-gray-100  border-white w-70 flex flex-col'>
                            <div>
                                <img className='rounded-lg hover:scale-120' src={item.img} width={260} alt="" />
                            </div>
                            <div className='flex flex-col font-serif'>
                                <h1 className='font-bold text-lg text-center'>{item.title}</h1>
                                <p className=' pb-2'>{item.desc}</p>
                                <div className='font-bold text-lg'>₹ {item.price} <span className='line-through text-gray-600'>{item.rprice}</span>
                                <span className='bg-green-500 p-1 rounded-md mx-1'>{parseInt(((parseInt(item.rprice)-parseInt(item.price))/parseInt(item.rprice))*100)}% off</span></div>
                            </div>
                            <div className='flex justify-around py-3'>
                                <button className='bg-blue-800 hover:bg-blue-900 rounded-lg p-2 px-4 cursor-pointer'><span><MdAddShoppingCart color='white' size={25} /></span></button>
                                <button className='flex hover:bg-blue-900 bg-blue-800 items-center text-white font-bold rounded-lg p-2 px-5 cursor-pointer'><span><img src="buy.svg" alt="" /></span>
                                    <span>Buy Now</span></button>
                            </div>
                            <div className='flex justify-evenly py-1'>
                                <div className='flex hover:bg-green-600 bg-green-500 w-fit border rounded-xl gap-1 px-2 items-center'>
                                    <div className='font-bold text-white'>{item.rating}</div>
                                    <div><img width={15} src="star.png" alt="" /></div>
                                </div>
                                <div className='text-gray-600 text-md'>{item.reviews} Reviews</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </ul>
    )
}

export default Mobile
