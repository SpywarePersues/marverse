/* eslint-disable @next/next/no-img-element */
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'

function nightMarket() {
    const databaseRef = collection(database, 'Night Market')
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
        <ContainerBlock title="Night Market">
            <div className='bg-[url("https://thumbs.gfycat.com/LeanFlamboyantDuckbillplatypus-max-1mb.gif")] pt-10'>
                <h1 className='text-5xl text-center my-6'>Night Market</h1>
                <div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                    {firedata.map((data) => {
                        return(
                            <a href={`/nightMarket/${data.id}`} key={data.id} className="glassmorph md:mx-16 mx-6 w-[18rem] lg:w-[26rem] xl:w-[35rem] rounded-lg transition-scale duration-300 my-6">
                                <img src={data.Image} className="w-[46rem] border-solid border-slate-600 border-4 rounded-md" alt='' />
                                <h1 className='md:text-3xl text-2xl my-4 text-center'>{data.Name}</h1>
                                <h1 className='my-4 text-center md:text-xl'>${data.Price}</h1>
                                <h1 className='my-4 text-center md:text-xl'><strong>Origin: </strong>{data.Origin}</h1>
                                <div className='flex justify-evenly pb-5'>
                                    <button class="inline-flex text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-700 to-black group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                        <a href={`/nightMarket/${data.id}`} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Discover
                                        </a> 
                                    </button>
                                    <button class="inline-flex text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-700 to-black group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                        <a href={`/checkout/nightMarket`} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Buy Now
                                        </a> 
                                    </button>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </ContainerBlock>
    )
}

export default nightMarket