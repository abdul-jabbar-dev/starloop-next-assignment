import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Products({ product }) {
    return (
        <Link href={"/products/"+product._id}>
            <div className="card w-96 bg-base-100 shadow-xl pt-2">
                <figure><Image width={200} height={100} src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.productName}
                        <div className="badge badge-neutral">{product.price}</div>
                    </h2>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{product.status}</div>
                        <div className="badge badge-outline">{product.category}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
