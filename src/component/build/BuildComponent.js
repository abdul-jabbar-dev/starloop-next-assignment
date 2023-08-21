/* eslint-disable @next/next/no-img-element */
import { removeFromBuild } from '@/state/feature/builder/pcBuilder';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
export default function BuildComponent({ item }) {
    const { listBuilder } = useSelector(state => state.builder)
    const addProduct = listBuilder[item.name]
    const dispatch = useDispatch()
        
    const addedProduct = () => {
        if (!addProduct) return <div></div>
        else return <div className='flex border px-6 py-2 gap-x-4 items-center  text-neutral-600 font-semibold'>
            <Image width={60} height={50} src={addProduct?.image} alt="Shoes" />
            <span>{addProduct?.productName}</span>
            <span>{addProduct?.price}</span>
            <img onClick={() => dispatch(removeFromBuild(addProduct))} className='hover:bg-neutral-500 rounded-full cursor-pointer p-1' width="25" height="25" src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png" alt="delete-sign--v1" />
        </div>
    }

    return (
        <>
            <hr />
            <div className="flex justify-between px-4 py-2  gap-x-10">
                <span className=" flex items-center gap-x-4 text-neutral-800 font-semibold">
                    <img width="56" src={item.img} alt="external-ram-technology" />
                    <p>{item.name}</p>
                </span>
                <div className="flex flex-grow justify-end gap-x-12 items-center">
                    {addedProduct()}
                    <Link className="btn" href={item.link}>{addProduct ? "Change" : " Add to build"}</Link>
                </div>
            </div>
        </>
    )
}
