
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
export default function Login() {
    const { push } = useRouter()
    const { data } = useSession()
    if (data) {
        push('/')
    }
    return (
        <div className="container mx-auto flex flex-col w-full my-12 ">
            <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in with
                    </h6>
                </div>
                <div className="btn-wrapper text-center">
                    <button onClick={() => signIn("github", { callbackUrl: '/' })} className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                        <img alt="..." className="w-8 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github</button>
                    <button onClick={() => signIn("facebook", { callbackUrl: '/' })} className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                        <img alt="..." className="w-8 mr-1" src="https://img.icons8.com/color/48/facebook-new.png" />Facebook </button>

                </div>
            </div>
        </div>
    )
}
Login.getLayout = function (page) {
    return <div className="min-h-screen flex flex-col justify-between ">
        <RootNav />
        <div className="flex-grow  h-full  hero-overlay">
            {page}
        </div>
        <RootFooter />
    </div>
}