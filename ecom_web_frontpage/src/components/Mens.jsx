import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

const items =[
    {
        "id": 1,
        "img": "men4.png",
        "title": "Workwear Suit",
        "desc": "A ruggedly handsome suit that can be dressed up or down, suitable for...",
        "rprice":"1999",
        "price": "1599",
        "rating": "4.7",
        "reviews": "320"
    },
    {
        "id": 2,
        "img": "men5.png",
        "title": "Levi's 501 Original-Fit Jeans",
        "desc": "Classic design and durable jeans available in a wide range of sizes.",
        "rprice":"1999",
        "price": "999",
        "rating": "4.5",
        "reviews": "1500"
    },
    {
        "id": 3,
        "img": "men1.png",
        "title": "Men's Clothing Essentials",
        "desc": "A curated list of 31 key men's clothing essentials to keep your...",
        "rprice":"1999",
        "price": "899",
        "rating": "4.8",
        "reviews": "200"
    },
    {
        "id": 4,
        "img": "men2.png",
        "title": "Men's Accessories Set",
        "desc": "A comprehensive set of men's accessories including belts, ties...",
        "rprice":"1999",
        "price": "1299",
        "rating": "4.6",
        "reviews": "350"
    },
    {
        "id": 5,
        "img": "men4.png",
        "title": "Old Money Aesthetic Blazer",
        "desc": "A classic blazer exuding timeless charm and sophistication.",
        "rprice":"1999",
        "price": "1499",
        "rating": "4.9",
        "reviews": "275"
    },
    {
        "id": 6,
        "img": "men3.png",
        "title": "Casual Denim Jacket",
        "desc": "A trendy denim jacket that pairs well with any casual outfit.",
        "rprice":"1999",
        "price": "1599",
        "rating": "4.2",
        "reviews": "892"
    },
    {
        "id": 7,
        "img": "men2.png",
        "title": "Slim Fit Stretch Jeans",
        "desc": "Comfortable and fashionable slim-fit jeans with super flex denim.",
        "rprice":"1999",
        "price": "1299",
        "rating": "4.3",
        "reviews": "1245"
    },
    {
        "id": 8,
        "img": "men5.png",
        "title": "Leather Jacket",
        "desc": "A premium leather jacket that adds a rugged and stylish look.",
        "rprice":"1999",
        "price": "499",
        "rating": "4.6",
        "reviews": "912"
    },
    {
        "id": 9,
        "img": "men2.png",
        "title": "Checked Shirt",
        "desc": "A fashionable checked shirt suitable for casual and semi-formal events.",
        "rprice":"1999",
        "price": "799",
        "rating": "4.4",
        "reviews": "745"
    },
    {
        "id": 10,
        "img": "men3.png",
        "title": "Sports Tracksuit",
        "desc": "A comfortable and breathable tracksuit designed for sports and fitness...",
        "rprice":"1999",
        "price": "399",
        "rating": "4.3",
        "reviews": "890"
    },
    {
        "id": 11,
        "img": "men2.png",
        "title": "Checked Shirt",
        "desc": "A fashionable checked shirt suitable for casual and semi-formal events.",
        "rprice":"1999",
        "price": "799",
        "rating": "4.4",
        "reviews": "745"
    },
    {
        "id": 12,
        "img": "men3.png",
        "title": "Sports Tracksuit",
        "desc": "A comfortable and breathable tracksuit designed for sports and fitness...",
        "rprice":"1999",
        "price": "399",
        "rating": "4.3",
        "reviews": "890"
    }
]

const Mens = () => {
    return (
        <ul className='flex flex-wrap justify-center overflow-y-auto h-[60vh] md:h-[80vh] bg-gray-500 py-2 rounded-xl '>
            {items.map(item => {
                return (
                    //   
                    <div key={item.id} className='Cardcontainer p-3 md:gap-x-20 gap-y-10 items-center justify-center'>
                        <div className='card border rounded-lg bg-white hover:bg-gray-100 border-white w-70 flex flex-col'>
                            <div>
                                <img className='rounded-lg hover:scale-105 py-2' src={item.img} width={260} alt="" />
                            </div>
                            <div className='flex flex-col font-serif'>
                                <h1 className='font-bold text-lg text-center'>{item.title}</h1>
                                <p className=' pb-2'>{item.desc}</p>
                                <div className='font-bold text-lg'>₹ {item.price} <span className='line-through text-gray-600'>{item.rprice}</span>
                                <span className='bg-green-500 p-1 rounded-md mx-1 '>{parseInt(((parseInt(item.rprice)-parseInt(item.price))/parseInt(item.rprice))*100)}% off</span></div>
                            </div>
                            <div className='flex justify-around py-3'>
                                <button className='bg-blue-800 hover:bg-blue-900 rounded-lg p-2 px-4 cursor-pointer'><span><MdAddShoppingCart color='white' size={25} /></span></button>
                                <button className='flex hover:bg-blue-900 bg-blue-800 items-center text-white font-bold rounded-lg p-2 px-5 cursor-pointer'><span><img src="buy.svg" alt="" /></span>
                                    <span>Buy Now</span></button>
                            </div>
                            <div className='flex justify-evenly py-1'>
                                <div className='flex bg-green-500 hover:bg-green-600 w-fit border rounded-xl gap-1 px-2 items-center'>
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

export default Mens
