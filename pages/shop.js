/* eslint-disable @next/next/no-img-element */
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'

function shop() {
    const databaseRef = collection(database, 'Product')
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
            <h1 className='text-5xl text-center my-6'>All Products</h1>
            <div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                {firedata.map((data) => {
                    return(
                        <div key={data.id} className="glassmorph md:mx-16 mx-6 w-[18rem] lg:w-[26rem] xl:w-[35rem] rounded-lg hover:scale-105 transition-scale duration-300 my-6">
                            <img src={data.Image} className="w-[46rem] border-solid border-slate-600 border-4 rounded-md" alt='' />
                            <h1 className='md:text-3xl text-2xl my-4 text-center'>{data.Name}</h1>
                            <h1 className='my-4 text-center md:text-xl'>₹{data.Price}</h1>
                            <h1 className='my-4 text-center md:text-xl'><strong>Origin: </strong>{data.Origin}</h1>
                            <Link href={`/product/${data.id}`}><button className='my-4 button px-4 py-3 rounded-md block mx-auto'>Discover</button></Link>
                        </div>
                    )
                })}
            </div>
        </ContainerBlock>
    )
}

export default shop