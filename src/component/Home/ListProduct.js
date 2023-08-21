import React from 'react'
import Products from '@/component/product/Products';
import Link from 'next/link';

export default function ListProduct({ products }) {
    console.log(products)
    return (

        <div className='container mx-auto my-16'>
            <Link className='my-3  hover:underline' href="/products">See all </Link>
            <div className='flex space-x-4' >
                {products?.slice(0, 6).map((aproduct, i) => <Products key={i} product={aproduct}></Products>)}
            </div>
        </div>
    )
}


