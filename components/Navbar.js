import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-gray-50'>
      <div className='flex items-center w-full h-full px-2 2xl:px-16'>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Favorites</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar