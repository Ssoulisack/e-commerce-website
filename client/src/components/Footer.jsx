import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus repellat adipisci fugiat quasi aspernatur incidunt repudiandae. Repellat nihil totam, nulla deleniti consequatur voluptate velit animi eaque magnam repellendus nobis quas?
                </p>
            </div>
            <div>
                <div className='text-xl font-medium mb-5'>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div> 
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+8562055169040</li>
                    <li>soulisack@gmail.com</li>
                </ul>
            </div>
        </div>

        <div >
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ soloCode.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer