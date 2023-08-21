import { addToBuild } from '@/state/feature/builder/pcBuilder'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Products({ product }) {
    const { data: user } = useSession()
    const { asPath, push } = useRouter()
    const path = asPath?.split('/')[1]
    const dispatch = useDispatch()
    return (
        <div className="card w-96 bg-base-100 z-10 shadow-xl pt-2">
            <Link href={"/products/" + product._id}>
                <figure><Image width={200} height={100} src={product.image} alt="Shoes" /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">
                    {product.productName}
                    <div className="badge badge-neutral">{product.price}</div>
                </h2>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{product.status}</div>
                    <div className="badge badge-outline">{product.category}</div>
                </div>
                {user ?
                        (path.toLowerCase() === 'build' && < span className='btn mt-2' onClick={() => {
                            if (!user) {
                                push('/login')
                            }
                            dispatch(addToBuild(product))
                            push('/build')
                        }}>
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/000000/add.png" alt="add" /> Add component
                        </span>
                    ) : <Link href={'/login'} className='text-center btn my-2 text-neutral'> Login First</Link>}
            </div>
        </div>
    )
}
