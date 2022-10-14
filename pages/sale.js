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
            <div className='bg-[url("../public/moon.jpg")] py-10 bg-cover mb-10'>
            <h1 className='py-5 mb-5 lg:text-5xl text-center text-gray-100 glassmorph'><span className='font-bold'>SALE</span> will be live this <span className='font-bold'>FULL MOON</span></h1>
                <video autoPlay loop className='w-11/12 lg:w-5/12 mx-auto mb-5'>
                    <source src='./moon.mp4' />
                </video>
            </div>
                <div className='flex flex-wrap justify-center mb-10'>
                    {firedata.map((data) => {
                        return(
                            <a href={`/sale/${data.id}`} key={data.id} className="glassmorph w-4/12 mx-10">
                                <img src={data.Image} className="w-screen lg:w-[46rem] border-solid border-slate-600 border-4 rounded-md" alt='' />
                            </a>
                        )
                    })}
                </div>
        </ContainerBlock>
    )
}

export default infinityStones