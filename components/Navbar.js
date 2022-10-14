import Link from "next/link"
import React, { useEffect as UseEffect, useState as UseState } from 'react'

export default function Navbar(){
    const [token, setToken] = UseState("")

    UseEffect(() => {
        setToken(sessionStorage.getItem('Token'))
    }, [])
    return(
        <div className="py-5 z-50">
            <ul className="lg:flex justify-between w-10/12 text-center text-base cursor-pointer lg:w-8/12 mx-auto py-5 text-gray-200 glassmorph rounded-md lg:px-36">
                <Link href={{pathname: '/'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Home</li></Link>
                <Link href={{pathname: '/shop'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Shop</li></Link>
                <Link href={{pathname: '/nightMarket'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Night Market</li></Link>
                <Link href={{pathname: '/infinityStones'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Infinity stones</li></Link>
                <Link href={{pathname: '/suits'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Suits</li></Link>
                {token ? (<Link href={{pathname: '/login'}}><img src={sessionStorage.getItem('PFP')} className=" w-8 h-8 rounded-full mx-auto my-2 lg:my-0 lg:mx-0"/></Link>) : (<Link href={{pathname: '/login'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Login</li></Link>)}
            </ul>
        </div>
    )
}