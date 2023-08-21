/* eslint-disable @next/next/no-img-element */
import BuildComponent from '@/component/build/BuildComponent'
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Index() { 
    const { count } = useSelector(state => state.builder)
    const items = [
        {
            img: 'https://img.icons8.com/fluency/48/processor.png',
            name: 'Processor',
            link: '/build/processor'

        }, {
            img: 'https://img.icons8.com/fluency/48/memory-slot.png',
            name: 'RAM',
            link: '/build/ram'

        }, {
            img: 'https://img.icons8.com/external-beshi-color-kerismaker/48/external-Power-Supply-computer-hardware-beshi-color-kerismaker.png',
            name: 'Power Supply Unit',
            link: '/build/power supply'

        }, {
            img: 'https://img.icons8.com/fluency/48/motherboard.png',
            name: 'Motherboard',
            link: '/build/motherboard'

        }, {
            img: 'https://img.icons8.com/fluency/48/hdd.png',
            name: 'Storage Device',
            link: '/build/storage'

        }, {
            img: 'https://img.icons8.com/fluency/48/pro-display-xdr.png',
            name: 'Monitor',
            link: '/build/monitor'

        },
    ] 
    return (
        <>
            <p className='text-center font-semibold text-3xl my-12 text-neutral-800'>Let&apos;s build your computer </p>
            <div className="my-8 container mx-auto flex flex-col gap-y-12">
                <div className="border ">
                    <div>
                        {items.map((item, i) => <span key={i}>
                            <BuildComponent item={item}  />
                        </span>)}
                    </div>
                </div>
                <button disabled={count !== 6} className='btn btn-primary my-5 '>Complete Build </button>
            </div></>
    )
}

Index.getLayout = function (page) {
    return <div className="min-h-screen flex flex-col justify-between ">
        <RootNav />
        <div className="flex-grow  h-full  hero-overlay">
            {page}
        </div>
        <RootFooter />
    </div>
}