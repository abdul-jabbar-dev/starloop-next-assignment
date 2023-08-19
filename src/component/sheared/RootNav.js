/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function RootNav({ children }) {
    return (
        <>
            <div className=" bg-neutral text-neutral-content shadow-lg static w-full top-0" >
                <div className="navbar container mx-auto ">
                    <div className="flex-1">
                        <Link className="btn btn-ghost  text-xl uppercase" href="/"> StarLoop</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal gap-4 flex justify-center  ">

                            <li className="py-2 ">
                                <details>
                                    <summary className="hover:text-neutral-50">
                                        Categories
                                    </summary>
                                    <ul className=" rounded-md w-max bg-neutral text-neutral-content ">
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/hj">CPU / Processor</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/hj">Motherboard</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/hj">RAM</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/hj">Power Supply Unit</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/hj">Storage Device</Link></li>
                                        <li><Link className="hover:text-white hover:border-white border-neutral rounded-none border-b " href="/hj">Monitor</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="flex justify-center">
                                 <Link href="/build" className="hover:text-white hover:border-white border-neutral"> <img width="22" height="22" src="https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-Computer-virtual-reality-(flat)-flat-andi-nur-abdillah.png" alt="external-Computer-virtual-reality-(flat)-flat-andi-nur-abdillah" />Build a PC</Link></li> 
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}
