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
                            <a href={`/sale/${data.id}`} key={data.id} className="glassmorph md:mx-16 mx-6 w-[15rem] lg:w-[22rem] xl:w-[30rem] rounded-lg hover:scale-105 transition-scale duration-300 my-6">
                                <img src={data.Image} className="w-screen lg:w-[46rem] border-solid border-slate-600 border-4 rounded-md" alt='' />
                            </a>
                        )
                    })}
                </div>
        </ContainerBlock>
    )
}

export default infinityStones