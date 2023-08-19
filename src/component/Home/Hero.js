import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-contain  bg-no-repeat " style={{ backgroundImage: 'url(https://content.ibuypower.com/cdn-cgi/image/width=1080,format=auto,quality=75/https://content.ibuypower.com//Images/en-US/Lobby/rdy_main.png?v=78e9cdc638aa0aeb7b69964653f821d6fdbe1c87)' }}>

            <div className="hero-overlay"></div>
            <div className="  text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link href="/products"> <button className="btn bg-neutral rounded text-neutral-content hover:bg-neutral-900">Products</button></Link>
                </div>
            </div>
        </div>
    )
}
