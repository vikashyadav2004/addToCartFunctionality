import Products from '@/components/products/Products'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return ( 
    <div>
<header className='h20 bg-gray-400 '>
    <h1><Link href={"/cart"}>Cart</Link></h1>
</header>
        <Products/>
    </div>
  )
}

export default page