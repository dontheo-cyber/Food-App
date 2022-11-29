import React from 'react'

const Cardlines = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* cards */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
                
                <p className='font-bold text-2xl px-2 pt-4'>CHIPS & BOGAS, READY</p>
                <p className='px-2'> 8AM Till 9PM</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>

            </div>
            <img className='max-h-[300px] md:max-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
                
                <p className='font-bold text-2xl px-2 pt-4'>CHIPS & SAUCE, READY</p>
                <p className='px-2'> 8AM Till 9PM</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>

            </div>
            <img className='max-h-[300px] md:max-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white '>
                
                <p className='font-bold text-2xl px-2 pt-4'>CHINESE BOGA, READY</p>
                <p className='px-2'> 8AM Till 9PM</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>

            </div>
            <img className='max-h-[300px] md:max-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
        </div>
    </div>
  )
}

export default Cardlines