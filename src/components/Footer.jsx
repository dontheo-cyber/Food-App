import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='w-full bg-gray-200 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex justify-between items-center text-center '>
                <h1 className='inline border-b-4 border-orange-500 text-3xl font-bold'>Best Bite</h1>
                <div className='flex justify-between w-full sm:max-w-[280px]  p-2 text-orange-600'>
                   <FaFacebook className="icon" size={30}/>
                   <FaYoutube className="icon" size={30}/>
                   <FaPinterest className="icon" size={30}/>
                   <FaInstagram className="icon" size={30}/>
                   <FaTwitter className='icon' size={30}/>
                </div>
               
            </div>
            <div className='flex justify-between font-bold text-xl p-4'>
                <ul className='lg:flex text-2xl p-4' >
                    <li>About</li>
                    <li>Order</li>
                    <li>Newsroom</li>
                    <li>Help</li>
                    <li>Best Order</li>
                </ul>
                <ul className='text-right lg:flex'>
                   <li>Homes</li>
                   <li>Contacts</li>
                   <li>Promotions</li>
                   <li>FAQ</li>
                   <li>Events</li>       
                </ul>
            </div>

        </div>

    </div>
  )
  
}

export default Footer