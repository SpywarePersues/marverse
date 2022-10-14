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
            <h1 className='py-10 text-5xl text-center text-gray-300'>Sale will me live next <span className='font-bold'>Full Moon</span></h1>
                <div className='flex flex-wrap justify-center'>
                    {firedata.map((data) => {
                        return(
                            <div href={`/stones/${data.id}`} key={data.id} className="glassmorph w-4/12 mx-10">
                                <img src={data.Image} className="w-screen lg:w-[46rem] border-solid border-slate-600 border-4 rounded-md" alt='' />
                            </div>
                        )
                    })}
                </div>
        </ContainerBlock>
    )
}

export default infinityStones