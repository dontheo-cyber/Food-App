import React,{useState} from "react"
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery, TbLogin} from "react-icons/tb"
import {FaWallet} from "react-icons/fa"
import { MdHelp } from 'react-icons/md'
import { SiGnuprivacyguard } from 'react-icons/si'
import { FcAbout} from 'react-icons/fc'
import SubmitButton from "./buttons/SubmitButton"


const Navbar = () => {
    const [menu, setMenu] = useState(false)
  return (
    <div className='max-w-[16640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
            <div onClick={()=> setMenu(!menu)} className='cursor-pointer'>
                <AiOutlineMenu size={40}/>

            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 p-10'> 
                  Best <span className='font-bold'>Bites</span>
          </h1>
                <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]' >
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
        </div>
        {/* Search inputs */}

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='search foods' />
        </div>

        {/* add cart */}
        <div>
        <SubmitButton
            icon={<BsFillCartFill size={25} className="mr-2"/>}
            placeholder="Cart"
        />
           
        </div>
        {menu ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
          </div>: ''}
          {/* Overlay */}
         
          {/* side drawer menu */}

        <div className={menu ? 'fixed top-0 left-0 w=[300px] h-screen bg-white z-10 duration-300'  : 'fixed top-0 left-[-100%] w=[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose  onClick={()=> setMenu(!menu)} size={20} className='absolute right-4 top-4 cursor-pointer'/>
          <h2 className='text-2xl p-12'>
             Best <span className='font-bold'>Bites</span>
        </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={20} className='mr-2'/> Order</li>
                    <li className='text-xl py-4 flex'><FcAbout size={20} className='mr-2'/> AboutUs</li>
                    <li className='text-xl py-4 flex'><FaWallet size={20} className='mr-2'/> Wallet</li>
                    <li className='text-xl py-4 flex'><MdHelp size={20} className='mr-2'/> Help</li>
                    <li className='text-xl py-4 flex'><AiFillTag size={20} className='mr-2'/> Promotions</li>
                    <li className='text-xl py-4 flex'><BsFillSaveFill size={20} className='mr-2'/> Best Order</li>
                    <li className='text-xl py-4 flex'><SiGnuprivacyguard size={20} className='mr-2'/> SignUp</li>
                    <li className='text-xl py-4 flex'><TbLogin size={20} className='mr-2'/> Login</li>
               </ul>
            </nav>

        </div>


          
    </div>
  )
}
 
export default Navbar
