import React from 'react'

function SubmitButton({ placeholder, value, icon }) {
  return (
    <>
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
           {icon}{placeholder}
           </button>
    </>
  )
}

export default SubmitButton