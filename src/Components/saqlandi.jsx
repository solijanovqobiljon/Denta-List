import React from 'react'
import { FaCheck } from "react-icons/fa";
function final() {
  return (
    <div>
      <div className='w-full flex justify-center  mt-[190px]'>
        <div className='w-[60px] h-[60px] bg-[#00E42A] rounded-[50%] flex justify-center items-center'>
        <FaCheck className='text-white text-[25px]' />
        </div>
      </div>
      <p className='text-black text-2xl mt-[19px] text-center'>Ma'lumot Saqlandi </p>
      <div className='w-[250px] h-[55px] rounded-2xl bg-[#00BCE4] text-2xl text-white text-center pt-[11px] block m-auto mt-[90px]'>
        Bosh sahifa
      </div>
    </div>
  )
}

export default final
