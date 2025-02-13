import Products from '@/components/products/Products'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return ( 
    <div>
<header className='h20 bg-gray-400 fixed top-0 z-50 w-full'>
    <h1><Link href={"/cart"}>Cart</Link></h1>
</header>
        <Products/>
    </div>
  )
}

export default page