/* eslint-disable @next/next/no-img-element */
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'

function infinityStones() {
    const databaseRef = collection(database, 'sale')
    const [firedata, setFiredata] = UseState([])

    UseEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }
    return (
        <ContainerBlock title="Sale">
            <div className='py-10 bg-cover mb-10'>
            <video autoPlay muted loop className='absolute w-screen min-screen'>
                    <source src='./moon.mp4' />
            </video>
            <h1 className='py-5 mb-5 lg:text-5xl text-center text-gray-100 glassmorph'><span className='font-bold'>SALE</span> will be live this <span className='font-bold'>FULL MOON</span></h1>
            </div>
                <div className='flex flex-wrap justify-center mb-10'>
                    {firedata.map((data) => {
                        return(
                            <div key={data.id} className="glassmorph h-8/12 md:mx-16 mx-6 w-11/12 lg:w-3/12 rounded-lg hover:scale-105 transition-scale duration-300 my-6">
                                <img src={data.Image} className="w-screen h-full border-solid border-slate-600 border-4 rounded-md" alt='' />
                            </div>
                        )
                    })}
                </div>
        </ContainerBlock>
    )
    
}

export default infinityStones