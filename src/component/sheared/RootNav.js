/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
export default function RootNav({ children }) {
    const { data } = useSession()
    return (
        <>
            <div className=" bg-neutral text-neutral-content shadow-lg static w-full top-0 z-[999]" >
                <div className="navbar container mx-auto ">
                    <div className="flex-1">
                        <Link className="btn btn-ghost  text-xl uppercase" href="/"> StarLoop</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal gap-4 flex justify-center items-center">

                            <li className="py-2 ">
                                <details>
                                    <summary className="hover:text-neutral-50">
                                        Categories
                                    </summary>
                                    <ul className=" rounded-md w-max bg-neutral text-neutral-content z-[999] ">
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href={"/category/processor"}>CPU / Processor</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/category/motherboard">Motherboard</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/category/ram">RAM</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/category/power supply unit">Power Supply Unit</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/category/storage device">Storage Device</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/category/monitor">Monitor</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="flex justify-center">
                                <Link href="/build" className="hover:text-white hover:border-white border-neutral"> <img width="22" height="22" src="https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-Computer-virtual-reality-(flat)-flat-andi-nur-abdillah.png" alt="external-Computer-virtual-reality-(flat)-flat-andi-nur-abdillah" />Build a PC</Link></li>
                            <li>
                                {!(data?.user) ? <Link href="/login" className="hover:text-white hover:border-white border-neutral">Login</Link> : <span onClick={() => signOut()} className="hover:text-white hover:border-white border-neutral">Logout</span>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            <div>
                {children}
            </div>
        </>
    )
}
