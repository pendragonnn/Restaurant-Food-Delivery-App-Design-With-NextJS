import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className='px-4 md:py-8 lg:px-20 xl:px-40 h-full flex flex-col md:flex-row items-center'>
      {
        menu.map(category => (
          <Link href={category.slug} key={category.id} className='w-full md:w-1/2 h-1/3 bg-cover p-8' style={{backgroundImage: `url(${category.img})`}}>
            <div className={`text-${category.color} w-1/2 `}>
              <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
              <p className='text-sm my-8'>{category.desc}</p>
              <button className={`hidden 2xl:block bg-red-500 text-white py-2 px-4 rounded`}>Explore</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default MenuPage