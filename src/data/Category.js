import React, {useState} from 'react'
import { categories } from './Data'

const Category = () => {
  console.log(categories)
  return (
    <div className='max-w-[1640] m-auto px-4 py-12'>
        <p className='text-orange-600 font-bold text-4lx text-center'>Top Rated Menu Items</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {/* categories */}
            { categories.map((item, index) => (
  
  <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>

 <img src={item.image} alt={item.name} className='w-40'/>
 <div className='flex justify-between px-2 py-4'>
   <p className='font-bold sm: text-xl'>{item.name}</p>
   <p><span className='bg-orange-500  text-white p-1 rounded-full '>{item.price}</span></p>
 </div>
  </div>
))}
        </div>

    </div>
  )
}

export default Category